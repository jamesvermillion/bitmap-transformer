const BYTE = 8;
const RGB = 3;
const START = 54;

var colorGet = function(obj){
  var temp = [];
  obj.colors = [];

  for (var i = 54; i < obj.endIndex ; i++){
    temp.push(obj.buffer.readUInt8(i));
    if (temp.length === obj.depth/BYTE){
      obj.colors.push(temp);
      temp = [];
    }
  }
}

//because colors is a multidemensional array nested for loop
function updateBuffer(obj){
  for (var i = 0, offset=START ; i < obj.colors.length; i++){
    for (var j=0; j < obj.depth/BYTE ; j++, offset++){
      obj.buffer.writeUInt8(obj.colors[i][j], offset);
    }
  }
}

//invert!
function invert(colors){
  colors = colors.map(function(rgba){
    var i = 0;
    while (i < RGB){ //change colors, not alpha
      rgba[i] = 255 - rgba[i];
      i++;
    }

    // console.log(rgba[1]);
    return rgba;
  });
  return colors[1];
}
//red!
function red(colors){
  colors = colors.map(function(rgba){
    var c = rgba[0] * 3;
    rgba[0] = (c <= 255) ? c : 255;

    console.log(rgba);
    return rgba;
  });
  return colors;
}
//gray!
function gray(colors){
  colors = colors.map(function(rgba){
    var gray = (rgba[0] + rgba[1] + rgba[2])/RGB;
    var i = 0;
    while (i < RGB){ //change colors, not alpha
      rgba[i] = gray;
      i++;
    }
    return rgba;
  });
  return colors;
}
module.exports.colorGet = colorGet;
module.exports.updateBuffer = updateBuffer;
module.exports.red = red;
module.exports.gray = gray;
module.exports.invert = invert;
