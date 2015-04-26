var request = require('request');

/* var s = request('http://www.pluralsight.com');

s.pipe( process.stdout );*/

// request('http://www.pluralsight.com').pipe( process.stdout );

var fs = require('fs');

//request('http://www.pluralsight.com').pipe( fs.createWriteStream('pluralsight.html') );

var zlib = require('zlib');

request('http://www.pluralsight.com').pipe( zlib.createGzip() ).pipe( fs.createWriteStream('pluralsight.html.gz') );