var express = require('express');
var app = express();

app.get('/', function (req, res) {
	for (var a = 0; a < 999999; a++) {
		//Do your computations
	}
	res.send('Hello World!');
});

var server = app.listen(3000, function () {
		console.log('Server started on port 3000');
	});
