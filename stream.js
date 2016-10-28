/*
* @Author: lushijie
* @Date:   2016-10-28 18:07:04
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-28 18:08:47
*/

var fs = require('fs');
var readStream = fs.createReadStream('source.txt', {
    });
var writeStream = fs.createWriteStream('streamOut.txt', {
        defaultEncoding: 'utf8',
        flags: 'w', //'a': append
    });

writeStream
    .on('open', function(fd) {
        console.log('writeStream open fd=', fd);
    })

readStream
    .on('readable', function() {
        console.log('readable...', readStream.bytesRead);
    })
    .on('open', function(fd) {
        console.log('readStream open fd=', fd);
    })
    .on('data', function(chunk) {
        console.log(
            'chunk byte=',
            readStream.bytesRead ,
            '; content:',chunk.toString().slice(0,10)+'...'
        );
        writeStream.write(chunk);
    })
    .on('end', function() {
        writeStream.end();
        console.log('readStream end...');
    })
