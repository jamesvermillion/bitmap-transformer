const BDR = require('./lib/bitmap_data_reader.js');
const EE = require('events').EventEmitter; 
const transformer = require('./lib/transform');
const processOrig = BDR.meta;

var ee = new EE();
var bitmapObject = {};

if (process.argv.length < 2 || !process.argv[2].endsWith('.bmp') && !process.argv[2].endsWith('.dib')){
  console.log('please enter bitmap file as third argument');
  return;
}

start = function () {
  // path property
  bitmapObject.path = process.argv[2];
  // transform property
  bitmapObject.transform = process.argv[3] || 'invert';
  processOrig(bitmapObject);
}();