var gray = require('./../lib/transform.js').gray;
var expect = require('chai').expect;

var c = [[1,1,1],[2,2,2]];
var g = gray(c);
console.log(g);

describe('testing gray', function() {



  it('gray', function(done) {
    var c = [[1,1,1],[2,2,2]];
    var g = gray(c);
    expect(g).to.eql(54);
    done();
  });
});
