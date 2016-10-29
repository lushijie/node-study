/*
* @Author: lushijie
* @Date:   2016-10-29 12:19:37
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-29 12:21:15
*/


var WritableStream = require("stream").Writable;

var util = require("util");

util.inherits(MyWritableStream, WritableStream);

function MyWritableStream(opt){
    WritableStream.call(this,opt);
}
MyWritableStream.prototype._write = function(a){
    console.log(" data=%s 写入到哪里呢？",a);
}

var writerInst = new MyWritableStream();
writerInst.write("hello, world");
