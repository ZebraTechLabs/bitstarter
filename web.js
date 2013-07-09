var express = require('express');
var fs = require('fs');
var indexFileContent = fs.readFileSync(index.html);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send(indexFileContent);
   //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
