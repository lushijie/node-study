# node-study

1. Stream

如何使用流(Stream)
    stream模块提供：

    可读流（Readable streams）
    可写流（Writable streams）
    双向流/可读写流（Duplex streams）
    变换流（Transform streams）

    使用方案                                         类（Class）    实现方法
    Reading only                                    Readable      _read
    Writing only                                    Writable      _write
    Reading and writing                             Duplex        _read, _write
    Operate on written data, then read the result   Transform     _transform, _flush


