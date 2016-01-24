var cluster = require('cluster');
 
if (cluster.isMaster) {
  var numCPUs = require('os').cpus().length;
 
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  var express = require('express');
  var app = express();
 
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });
 
  app.get('/explode', function(req, res) {
    setTimeout(function() {
      res.send(this.wont.go.over.well);
    }, 1);
  });
 
  var server = app.listen(3000, function() {
    console.log('Server started on port 3000');
  });
}