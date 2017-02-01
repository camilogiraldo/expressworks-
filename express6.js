const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.get('/search',  function(req, res){
  queryParams = req.query;
  res.send(queryParams)
})

app.listen(process.argv[2]);
