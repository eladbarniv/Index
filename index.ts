var express = require('express');
var app = express();

app.get('/aloha', function(_req, res){
   res.send("aloha!");
});

app.get('/micha', function(_req, res){
   res.send("Yo Michael!!!");
});

app.get('/dani', function(_req, res){
   res.send("Yo Daniel!");
});

app.get('/ola', function(_req, res){
   res.send("Lets go surf!");
});

app.get('/', function(_req, res){
   res.send("Hello world!");
});




app.listen(3000);