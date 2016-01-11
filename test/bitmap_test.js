var meta = require('./../lib/bitmap_data_reader.js').meta;
var expect = require('chai').expect;

var bm = setTimeout(meta('./images/non-palette-bitmap.bmp').type, 12);
var a = {path: './../images/non-palette-bitmap.bmp'};
  var m = meta(a);

describe('testing emitter', function() {
  
  beforeEach(function() {
    this.processBackup = process.argv;  
    process.argv = ['node', 'bitmap_data_reader.js', './images/non-palette-bitmap.bmp'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should show metaData', function(done) {
    setTimeout(expect(bm.startPixelData).to.eql(54), 10);
    done();
  });
});
