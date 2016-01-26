// http server to serve a single file
var http = require('http'),
	fs = require('fs'),
	filename = "test.mp3",
      server = process.argv[2] || ("http://localhost:9999");

const local_file_name = "client_data.mp3";

 http.get(server,
        function cb(res){
        var body = "";

        res.on("data", function(d){ 
          body += d;
        });

        res.on("end", function(){
          // console.log(body);
          // write it out to mp3
          fs.writeFile(local_file_name, body, function (){});
          // return body
        });
});

