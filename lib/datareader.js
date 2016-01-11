const os = require('os');


exports.fromBuffer = function(buffer) {
  var arrBuf = new ArrayBuffer(buffer.length);
  var viewBuf = new Uint8Array(arrBuf);
  for (var i = 0; i < buffer.length; i++) {
    viewBuf = buffer[i]
  }
  console.log(viewBuf);
  return viewBuf;
};

exports.toBuffer = function(arrBuf) {
  var buffer = new Buffer(arrBuf.byteLength);
  var viewBuf = new Uint8Array(arrBuf);
  for (var i = 0; i < buffer.length; i++) {
    buffer[i] = viewBuf[i];
  }
  console.log(buffer);
  return buffer;
};
