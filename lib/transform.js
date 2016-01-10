//var hope = meta('../images/non-palette-bitmap.bmp');

//hope ? console.log(hope.type) : setTimeout(function(){console.log(hope.type)}, 5);

module.exports = function(buffer, offset){
  
  var colors = []; // [r,g,b,a,r,g,b,a]
  for (var i = 0; i < buffer.length; i++){
    colors.push(buffer.readUInt8(i));
    //console.log(buffer.readUInt8(i));
  }


  // iterate over the colors. 
  colors.map(function(h){
    //invert the number
    return 255 - h;
  });

  //turn them into 8bit buffers and trade that buffer for the corresponding part of the original buffer
  
  console.log(buffer.length);
  for(var i = 0;i < colors.length * 8;i++){
    buffer.writeUInt8(colors[i], offset, 1);
    offset++;
  }


  // inverter
  // var inversion = colors.map(function(h){
  //   return 255 - h;
  //   // for(var i = 0; i< 3; i++){
  //   //   h[i] = 255 - h[i];
  //   // }
  // });

  // var j = 0;
  // while(j < buffer.length ){
  //   colors[j] = 255 - colors[j];

  //   j++;
  //   if ( (j + 1) % 4 === 0 ){
  //     j += 1;
  //   }
  // }
  //console.log(colors);
  return buffer;
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
