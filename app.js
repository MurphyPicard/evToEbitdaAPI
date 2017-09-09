var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('\nIt works!');
});


app.listen(2020, function(){
  console.log("App listening on 2020! ");
});
