const colorArray = [[1,1,1,],[2,2,2],[3,3,3]];//eslint-disable-line
const grayArray = [[1,1,1,],[2,2,2],[3,3,3]];//eslint-disable-line
const redArray = [[3,1,1],[6,2,2],[9,3,3]];
const invertArray = [249,253,253];

var meta = require('./../lib/bitmap_data_reader.js').meta;//eslint-disable-line
var expect = require('chai').expect;
var gray = require('./../lib/transform.js').gray;
var red = require('./../lib/transform.js').red;
var invert = require('./../lib/transform.js').invert;

describe('testing gray scale function', function() {
  it('should provide an array with gray output', function() {
    expect(gray(colorArray)).to.eql(grayArray);
  });
});

describe('testing red scale function', function() {
  it('should provide an array with red output', function() {
    expect(red(colorArray)).to.eql(redArray);
  });
});

describe('testing invert with file', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'bitmap_data_reader.js', './images/palette-bitmap.bmp', 'test'];
  });
  afterEach(function() {
    process.argv = this.processBackup;
  });
  it('should provide an array of inverted values using test command', function() {
    expect(invert(colorArray)).to.eql(invertArray);
  });
});
