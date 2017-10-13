var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Component = require('./Component.jsx');

var app = express();

app.get('/', function(req, res) {
  var content = ReactDOMServer.renderToString(
    React.createElement(Component)
  );
  res.send(content);
});

app.listen(3000, function() {
  console.log('Server started on localhost:3000');
});
