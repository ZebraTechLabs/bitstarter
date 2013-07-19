var express = require('express');
var fs = require('fs');
//var buffer =new Buffer(fs.readFileSync(index.html), 'utf-8');

var indexText = fs.readFileSync('index.html').toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send(indexText);
   //response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
