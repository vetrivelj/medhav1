'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
var https = require('https');
var fs = require('fs'),
    path = require('path');
restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

restService.post('/inputmsg', function(req, res) {

var audio = "audio says Nodejs code called!";
var text = "in text Nodejs code called!";
res.json({
                    speech: audio,
                    displayText: text 
                });
});


restService.listen((process.env.PORT || 9000), function() {
    console.log("Server up and listening");
});