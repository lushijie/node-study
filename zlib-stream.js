/*
* @Author: lushijie
* @Date:   2016-10-29 13:07:03
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-31 11:13:47
*/
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var rstream = fs.createReadStream('source.txt');
var wstream = fs.createWriteStream('source.txt.gz');

rstream   // reads from myfile.txt
  .pipe(gzip)  // compresses
  .pipe(wstream)  // writes to myfile.txt.gz
  .on('finish', function () {  // finished
    console.log('done compressing');
  });
