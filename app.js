var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var fs = require('fs');

var https = require('https');

var httpsPort = 8000;
var httpport = process.env.PORT || 7000;
var HOST = 'localhost';
var path = require('path');
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname + '/')));
app.use('/root', express.static(path.join(__dirname + '/root')));
app.use('/root/index.html', express.static(path.join(__dirname + '/root/index.html')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "/root" + "/index.html");
})


app.listen(3009, function () {
    console.log('Example app listening on port 3009!');
})

