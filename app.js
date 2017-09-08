var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('\nIt works!');
});


app.listen(1980, function(){
  console.log("App listening on 1980! ");
});
