const fs = require('fs');
const os = require('os');
const EE = require('events').EventEmitter;

// function readMeta(err, bitmap){
//   //if (err) throw err;
//   console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
//   console.log(`size: ${bitmap.readUInt32LE(2)}`);
//   console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
//   console.log(`width: ${bitmap.readUInt32LE(18)} by height: ${bitmap.readUInt32LE(22)}`);
//   console.log(`number of colors: ${bitmap.readUInt32LE(46)}`);
//   console.log(`endianness: ${os.endianness()}`);
// }

var ee = new EE();
var bitmap = fs.readFile(process.argv[2], (err, bitmap) => {
  if (err) throw err;
  console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
  console.log(`size: ${bitmap.readUInt32LE(2)}`);
  console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
  console.log(`width: ${bitmap.readUInt32LE(18)} by height: ${bitmap.readUInt32LE(22)}`);
  console.log(`number of colors: ${bitmap.readUInt32LE(46)}`);
  console.log(`endianness: ${os.endianness()}`);
});

