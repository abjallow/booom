// http server to serve a single file
var http = require('http'),
	fs = require('fs'),
	filename = "test.mp3",
	port = process.argv[2] || 8081;


function sendFile(req, res){
   var stream = fs.createReadStream(filename);
   stream.pipe(res);
}

//Create a server
var server = http.createServer(sendFile);
server.listen(port, function(){});

