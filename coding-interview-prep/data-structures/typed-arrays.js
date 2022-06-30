// Create same Int16Array array differently
var byteSize = 64;
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);

buffer.byteLength;
i32View.byteLength;

console.log(i32View);
