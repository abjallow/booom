// http server to serve a single file
var http = require('http'),
	fs = require('fs'),
      filed = require('filed'), 
      server = process.argv[2] || ("http://localhost:9999");

const local_file_name = "client_data.mp3";

 http.get(server,
        function cb(res){
         res.pipe(filed(local_file_name));
});

 

