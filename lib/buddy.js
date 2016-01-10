const fs = require('fs');
const os = require('os');
const EE = require('events').EventEmitter;
var ee = new EE();

function meta (file){
  
  var bitmapObject = {};
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
      // console.log(`type: ${bitmapObject.type}`);
      // console.log(`size: ${bitmapObject.size}`);
      // console.log(`start of pixel data: ${bitmapObject.startPixelData}`);
      // console.log(`width: ${bitmapObject.width} by height: ${bitmapObject.height}`);
      // console.log(`number of colors: ${bitmapObject.numColors}`);
      // console.log(`endianness: ${bitmapObject.endianness}`);
      //console.log(bitmapObject);
      //ee.emit('write', bitmapObject);

      //PROCESS THE BITMAP
  });

  return bitmapObject ? bitmapObject : setTimeout(function(){ return bitmapObject }, 10);
}



var f = process.argv[2];
var brown = meta(f);
brown ? setTimeout(function(){ console.log(brown) }, 10): false;
module.exports = meta;




