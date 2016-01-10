const fs = require('fs');
const os = require('os');
const EE = require('events').EventEmitter;
const START = 54;
const transformer = require('./transform');

var ee = new EE();
var bitmapObject = {};
function meta (file){
  // THERE IS NO WAY TO RETURN A VALUE FROM A CALLBACK...
  
  fs.readFile(file, function(err, bitmap) {
    //if (err) throw err;
    bitmapObject.type = bitmap.toString('utf8', 0, 2);
    bitmapObject.size = bitmap.readUInt32LE(2);
    bitmapObject.startPixelData = bitmap.readUInt32LE(10);
    bitmapObject.width = bitmap.readUInt32LE(18);
    bitmapObject.height = bitmap.readUInt32LE(22);
    bitmapObject.numColors = bitmap.readUInt32LE(46);
    bitmapObject.endianness = os.endianness();
    bitmapObject.buffer = bitmap; 
  
    bitmapObject.chunk_to_transform = null;
    //console.log(bitmapObject.startPixelData);  

    if (bitmapObject.numColors == 0){
      //go the non-palette rout
      // bitmatObject.startPixelData => buffer.length
      bitmapObject.offset = bitmapObject.startPixelData;
      bitmapObject.chunk_to_transform = bitmap.slice(START);
    } else {
      //go palette route;
      //start of palette 
      bitmapObject.offset = START;
      var end = START + bitmapObject.numColors * 4;
      bitmapObject.chunk_to_transform = bitmap.slice(START, end);
    }
    console.log(bitmapObject.buffer);
    ee.emit('transform', bitmapObject, bitmapObject.offset);

      //PROCESS THE BITMAP
  });

  return bitmapObject ? bitmapObject : setTimeout(function(){ return bitmapObject }, 10);
}



var f = process.argv[2];
var brown = meta(f);
//brown ? setTimeout(function(){ console.log(brown.buffer) }, 10): false;
module.exports = meta;

ee.on('transform', function(bitmapObject, offset) {
  //do something with transform.  
  bitmapObject.buffer = transformer(bitmapObject.buffer, offset);
  //bitmapObject.transormed_chunk = bitmapObject.chunk_to_transform;
  //console.log(bitmapObject.buffer.length);

  //emit to write
  ee.emit('makeBuffer', bitmapObject);  
});





ee.on('makeBuffer', function(bitmapObject) {
  
  //making a new buffer with the transformed bmp
  //console.log(bitmapObject.transormed_chunk);
  
  //buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
  // var metaData = bitmapObject.buffer.slice(0, 54);

  // var palette = bitmapObject.buffer.slice(54, bitmapObject.numColors * 4 + 54);

  // if (bitmapObject.numColors != 0){
  //   //54 to length trading vals with this chunk, chunk will be on 0 and original will be 56 ahead...
  //   palette = bitmapObject.transormed_chunk;

  // }

  // var pixels = bitmapObject.buffer.slice(metaData.length + palette.length, bitmapObject.buffer.length);
  // if (bitmapObject.numColors == 0){

  //   pixels = bitmapObject.transormed_chunk;
  // }
  //var totalSize = metaData.length + palette.length + pixels.length;
  // console.log(totalSize);
  // console.log(bitmapObject.buffer.length);

//writeUIntLE(value, offset, byteLength[, noAssert])
  //transformedBuffer.writeUIntLE(value, offset, byteLength[, noAssert])

  
  
  // console.log(transformedBuffer);
  // console.log(bitmapObject.buffer);
  
  //console.log(transformedBuffer.equals(bitmapObject.buffer))
   fs.writeFile('./write-file.bmp', bitmapObject.buffer, 0, bitmapObject.buffer.length);
});



