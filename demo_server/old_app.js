var express = require('express');
var app = express();
var Transform = require('stream').Transform,
	JSONStream = require('JSONStream');;
var filelistToJSON = new Transform({ objectMode: true });
var fs = require("fs");
var jsonToString = JSONStream.stringify(false);

const catalog_dir = "./catalog";

filelistToJSON._transform = function(data, encoding, done) {
  console.log(data);
  this.push({"a" : 1});
  done();
};

app.get('/search', function (req, res) {
  // get list of files in music dir and send to fileToJSON
  fs.readdir(catalog_dir, function(err, files){
  	if (err) throw err;
  	filelistToJSON.end(files);
  });

  // stream back 
   filelistToJSON.pipe(jsonToString).pipe(res);
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

