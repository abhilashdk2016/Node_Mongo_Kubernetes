var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  db = require('./db'),
  Post = require('./api/models/postModel'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

// We'll leave the 404 to be handled by Nginx on the frontend
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });
console.log('Changing Hello');
app.listen(port);

console.log('Projects in Docker API server started at: ' + port);
