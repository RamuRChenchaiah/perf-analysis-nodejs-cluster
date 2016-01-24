var cluster = require('cluster');

if (cluster.isMaster) {
	var numCPUs = require('os').cpus().length;

	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', function () {
		console.log('A worker process died, restarting...');
		cluster.fork();
	});
} else {
	var express = require('express');
	var app = express();

	app.get('/', function (req, res) {
		for (var a = 0; a < 999999; a++) {
			//Do your computations
		}
		res.send('Hello World!');
	});

	app.get('/explode', function (req, res) {
		setTimeout(function () {
			res.send(this.wont.go.over.well);
		}, 1);
	});

	var server = app.listen(3000, function () {
			console.log('Server started on port 3000');
		});
}
