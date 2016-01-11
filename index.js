const BDR = require('./lib/bitmap_data_reader.js');
const EE = require('events').EventEmitter; 
const transformer = require('./lib/transform');
const processOrig = BDR.meta;
const transforms = ['red', 'gray', 'invert'];
var ee = new EE();
var bitmapObject = {};

if (process.argv.length < 2 || !process.argv[2].endsWith('.bmp') && !process.argv[2].endsWith('.dib')){
  console.log('please enter bitmap file as third argument');
  return;
}
if (process.argv.length < 4 || transforms.indexOf(process.argv[3].toLowerCase()) === -1 ){
  console.log('invert will be your transform');
  bitmapObject.transform = 'invert'; 
} else {
  console.log(`${process.argv[3]} will be your transform`);
  bitmapObject.transform = process.argv[3]; 
}
start = function () {
  bitmapObject.path = process.argv[2];
  processOrig(bitmapObject);
}();