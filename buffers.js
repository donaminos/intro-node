var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('world').toString('base64');

console.log(b.toString('utf8', 0,2));