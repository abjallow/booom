// server.js
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require("fs");

const catalog_dir = "./catalog";

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();              // get an instance of the express Router

// router methods
router.get('/', function(req, res) {
	fs.readdir(catalog_dir, function(err, files){
		if (err) throw err;

		var resp = {}
		resp.filenames = files;
		res.json(resp);
	});
});

router.get('/', function(req, res) {

});

//register routes
// prefix is /api
app.use('/api', router);

app.listen(port);
console.log('Started booom server on' + port);
