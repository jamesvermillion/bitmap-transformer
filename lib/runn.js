var bitty = require('./buddy.js');
//var lilBuddy = buddy('./images/non-palette-bitmap.bmp');
var hope = bitty('./images/non-palette-bitmap.bmp');

setTimeout(function(){console.log(hope.type)}, 3);