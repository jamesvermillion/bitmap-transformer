module.exports = function() {
  const fs = require('fs');
  const os = require('os');
  const EE = require('events').EventEmitter;

  var ee = new EE();

  var bitmapObject = {};

  var bitmap = fs.readFile('./images/non-palette-bitmap.bmp', (err, bitmap) => {
    if (err) throw err;
    bitmapObject.type = bitmap.toString('utf8', 0, 2);
    bitmapObject.size = bitmap.readUInt32LE(2);
    bitmapObject.startPixelData = bitmap.readUInt32LE(10);
    bitmapObject.width = bitmap.readUInt32LE(18);
    bitmapObject.height = bitmap.readUInt32LE(22);
    bitmapObject.numColors = bitmap.readUInt32LE(46);
    bitmapObject.endianness = os.endianness();
    console.log(`type: ${bitmapObject.type}`);
    console.log(`size: ${bitmapObject.size}`);
    console.log(`start of pixel data: ${bitmapObject.startPixelData}`);
    console.log(`width: ${bitmapObject.width} by height: ${bitmapObject.height}`);
    console.log(`number of colors: ${bitmapObject.numColors}`);
    console.log(`endianness: ${bitmapObject.endianness}`);
    console.log(bitmapObject);
    console.log(bitmapObject.type);

    // ee.emit('write');
  });
  ee.on('write', function() {
    fs.writeFile('./write-file.txt', 'We wrote to a file');
      console.log("we are here!");
  });
  return 'string';
}();
