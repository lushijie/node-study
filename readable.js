/*
* @Author: lushijie
* @Date:   2016-10-28 18:45:04
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-28 19:05:58
*/
var util = require('util');
var stream = require('stream');

function myReadStream() {
  stream.Readable.call(this);
  this._index = 0;
  this._string = 'stream test';
}

// inherit stream.Readable
util.inherits(myReadStream, stream.Readable);

myReadStream.prototype._read = function() {
  var i = this._index++;
  if (i == this._string.length) {
    this.push(null);
    //this.pipe(process.stdout);
  }
  else {
    var buf = new Buffer(this._string[i], 'utf8');
    this.push(buf);
  }
};

var streamInst = new myReadStream();
streamInst._read();


streamInst.on('data', function(data) {
    console.log(data.toString());
});
streamInst.on('end', function(data) {
    console.log('end ...');
})
