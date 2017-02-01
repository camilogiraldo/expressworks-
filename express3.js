const express = require('express');
const stylus = require('stylus');
var app = express();

app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));


app.get('/home',  function(req, res){
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2]);
