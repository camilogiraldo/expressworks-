const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const fs = require('fs');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.get('/books',  function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    if (err) return err

    object = JSON.parse(data);
    res.send(object)
  })
})

app.listen(process.argv[2]);
