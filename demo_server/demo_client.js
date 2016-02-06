// http server to serve a single file
var http = require('http'),
	fs = require('fs'),
      filed = require('filed'), 
      server = process.argv[2] || ("http://localhost:3000/search");

const local_file_name = "client_data.mp3";

 http.get(server,
        function cb(res){
        console.log(res);

        res.on("data", (data) => );
         // res.pipe(filed(local_file_name));
});
