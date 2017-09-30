var express = require('express');
var path = require("path");
var multer  = require('multer');
var upload = multer();

var app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.render("index.html");
});

app.post('/upload', upload.single('file'), function (req, res, next) {
  if(req.file) {
    res.json({fileSize: req.file.size + ' bytes'});
  } else {
    res.json({error: 'No file uploaded'})
  }
  
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});