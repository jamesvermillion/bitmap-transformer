//var hope = meta('../images/non-palette-bitmap.bmp');
const BYTE = 8;
//hope ? console.log(hope.type) : setTimeout(function(){console.log(hope.type)}, 5);

module.exports = function(obj, offset){
  var depth = obj.depth;
  console.log(`depth ${depth}`);
  var ender = obj.offset;
  console.log('ender ' + ender);
  var temp = [];
  var colors = []; //makes an array of arrays, each being a color of [r,g,b,a]

  for (var i = 54; i < ender ; i++){
    temp.push(obj.buffer.readUInt8(i));
    
    if (temp.length === depth/8){
      colors.push(temp);
      temp = [];

    }
  }
  temp = null;

  //invert!
  colors = colors.map(function(rgba){
    var i = 0;
    while (i < 3){ //change colors but that's it
      rgba[i] = 255 - rgba[i];
      i++;
    }
    return rgba;
  });

  offset = 54; 
  //because colors is a multidemensional array
  for (var i = 0; i < colors.length; i++){
    for (var j=0; j < depth/8 ; j++){ 
      obj.buffer.writeUInt8(colors[i][j], offset);
      offset++;
    }
  }
  return obj.buffer; //need the buffer returned?
}

//figure out palette or non-palette & package
    //buffer and the offset
    //


//function inverter( theObject )
//* invert the colors (essentially subtract every color 
//value from the max color value which is 255)
// for loop that works by all of the pixels or colors (palette)
  // for loop that works in sets of 4 bytes
    // function that works each pixels
    // pixel we're working on = 255 - (old value);
