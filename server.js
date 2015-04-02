var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('projects'));

app.get('/', function (req, res) {

  var works = require(__dirname + "/myworks.json");

  res.render('index', {
  	projectItems: works.worksList,
  	projectsImageRoot: works.imageRoot
  });

});

var port = process.env.PORT || 3030;

var server = app.listen(port, function () {

  console.log('Listening on port' + port + "...");

});