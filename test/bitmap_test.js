var bitmap = require(__dirname + '/../lib/bitmap_data_reader.js');
var expect = require('chai').expect;
// var dummy = { type: 'BM',
//   size: 30054,
//   startPixelData: 54,
//   width: 100,
//   height: 100,
//   numColors: 0,
//   endianness: 'LE' };


describe('testing emitter', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'bitmap_data_reader.js', './images/non-palette-bitmap.bmp'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should show metaData', function() {
    expect(bitmap()).to.eql('string');
  });
});
