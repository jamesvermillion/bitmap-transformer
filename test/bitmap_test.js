var meta = require('./../lib/bitmap_data_reader.js');
var expect = require('chai').expect;
// var dummy = { type: 'BM',
//   size: 30054,
//   startPixelData: 54,
//   width: 100,
//   height: 100,
//   numColors: 0,
//   endianness: 'LE' };

var bm = setTimeout(meta('./images/non-palette-bitmap.bmp').type, 12);

describe('testing emitter', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    
    process.argv = ['node', 'bitmap_data_reader.js', './images/non-palette-bitmap.bmp'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should show metaData', function(done) {
    expect(bm).to.eql('BM');
    done();
  });
});
