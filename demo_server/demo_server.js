// http server to serve a single file
var http = require('http'),
	fs = require('fs'),
	filename = "test.mp3",
      filed = require('filed'),
	port = process.argv[2] || 9999;


function sendFile(req, res){
   filed(filename).pipe(res);
}

//Create a server
var server = http.createServer(sendFile);
server.listen(port, function(){});

