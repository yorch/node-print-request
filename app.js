var express = require('express'),
  textBody = require('body'),
  morgan = require('morgan'),
  app = express(),
  util = require('util'),
  colors = require('colors'),
  port = process.env.PORT || 5000;

app.use(morgan('combined'));

app.post('/', function(req, res) {
  textBody(req, res, function(err, body) {
    // invalid HTTP protocol or something
    if (err) {
      res.statusCode = 500;
      return res.end('Error');
    }

    util.puts(body);
    res.end('');

    // I am an echo server
    // res.end(body);
  });
});

app.listen(port, function() {
  util.puts('==========================================='.yellow);
  util.puts(' Starting Application...'.yellow);
  util.puts((' Listening on port ' + port).yellow);
  util.puts('==========================================='.yellow);
});
