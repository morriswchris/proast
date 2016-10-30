var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var curses = require('./curses.json').curses;

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));

app.get('/random', function(req, res) {
  res.json(curses[Math.floor(Math.random() * curses.length)]);
});

app.listen(port, function() {
  console.log('server running on http://localhost:' + port);
});
