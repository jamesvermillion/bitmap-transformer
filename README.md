# Bitmap Transformer
A bitmap transformer for Code Fellows 401 course
Contributors: James Vermillion, Jesse Thach, Darcy Lambrecht

Our Bitmap Data Reader program takes a bitmap file and transforms the colors to invert, grayscale, and Red, Green, Blue scale.
The meta function sets up the bitmapObject which reads the meta data of the bitmap file.
The transformObject function transforms the original buffer and writes a new buffer.
The writeToFile function then writes that new bitmap to a new file.
The transform.js file handles the logic of the transforms. First we get the colors which stores them in an array. The updateBuffer function updates the buffer.
There are a series of functions: invert, red, and gray which handles the transformations.
This program can run on palette as well as non-palette.
#Commands
```node index.js images/palette-bitmap.js gray```
```node index.js images/palette-bitmap.js red```
```node index.js images/palette-bitmap.js invert```

```node index.js images/non-palette-bitmap.js gray```
```node index.js images/non-palette-bitmap.js gray```
```node index.js images/non-palette-bitmap.js gray```
