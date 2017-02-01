const express = require('express');
const crypto = require('crypto');
const path = require('path');

var app = express();


app.put('/message/:id',  function(req, res){

    id = req.params.id;

    string = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')

  res.end(string)
})

app.listen(process.argv[2]);
