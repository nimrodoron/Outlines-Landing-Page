/**
 * Created by amir on 15/05/16.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var MAIL_FILE = "mails.csv";
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.post('/contact', function (req, res) {
    var email = req.body.email;
    fs.appendFile(MAIL_FILE,email+',', function(){});
    res.redirect("index.html?sent=true");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
