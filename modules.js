/*var os = require('os');

var toMb = function(f){
	return(Math.round( (f/1024/1024) * 100 ) / 100 );
}

console.log('Host: ' + os.hostname());
console.log('15 min. load averag: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');
*/

var request = require('request');

request('http://www.pluralsight.com', function(error, response, body){
	if( !error && response.statusCode === 200){
		console.log(body);
	}
});