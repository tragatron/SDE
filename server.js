express     = require('express'),
app         = express(),
bodyparser  = require('body-parser'),
mongodb     = require('mongodb'),
port        = 8000,
root        = __dirname;

app.use(bodyparser.json());

//Middleware:
app.use('/node_modules', express.static(root + '/client/node_modules'));
app.use('/contorllers', express.static(root + '/client/controllers'));
app.use('/js', express.static(root + '/client/js'));
app.use('/templates', express.static(root + '/client/templates'));
app.use('/css', express.static(root + '/client/css'));
app.use('/images', express.static(root + '/client/images'));

//Routes:
app.get('/', function(req, res){
  res.sendFile(root + '/client/views/index.html');
});

//Server Setup:
app.listen(port, function(){
  console.log("Listening on Port " + port);
});
