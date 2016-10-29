/*
* @Author: lushijie
* @Date:   2016-10-28 18:45:04
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-29 12:46:24
*/
  var util = require('util');
  var ReadableStream = require('stream').Readable;

  function MyReadStream() {
    ReadableStream.call(this);
    this._index = 0;
    this._string = 'Hello World!';
  }

  util.inherits(MyReadStream, ReadableStream);

  MyReadStream.prototype._read = function() {
    var i = this._index++;
    if (i == this._string.length) {
      this.push(null);
      this.pipe(process.stdout);
      //Why I get stdout 'ello World!' instead of 'Hello World!'?
    }
    else {
      var buf = new Buffer(this._string[i], 'utf8');
      this.push(buf);
    }
  };

  var readerInst = new MyReadStream();
  readerInst.read();


// readerInst.on('data', function(data) {
//     console.log(data.toString());
// });
// readerInst.on('end', function(data) {
//     console.log('end ...');
// })
