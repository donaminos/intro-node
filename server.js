var fs = require('fs');
var http = require('http');

http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	if( req.url === '/file.txt') {
		fs.createReadStream( __dirname + '/file.txt').pipe(res);
	} else {
		res.end('Hello world');
	}

}).listen(process.env.PORT, process.env.IP);

console.log('Server running');
console.log('__dirname: ' + __dirname);
console.log('PORT : ' + process.env.PORT);
console.log('IP : ' + process.env.IP);