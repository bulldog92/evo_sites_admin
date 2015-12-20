'use strict'
 var express = require('express');
 var app = express();
 app.use('/', express.static('app'));
 app.get('/', function(req, res){
    res.end('<h1>Hello World</h1>');
 });
 var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    var host = server.address().address;
    var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
     
 });