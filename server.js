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

var speech = "audio says Nodejs code called!";
var text = "in text Nodejs code called!";

    switch(req.body.originalRequest.source) {
        case "google":{
            res.json({
                speech: speech,
                displayText: text,
                contextOut : contextOut,
                data: {
                    google: {
                        'expectUserResponse': true,
                        'isSsml': false,
                        'noInputPrompts': [],
                        'richResponse': {
                            'items': [{
                                'simpleResponse': {
                                    'textToSpeech': speech,
                                    'displayText': text
                                }
                            }],
                            "suggestions": suggests
                        }
                    }
                }
            });
            break;
        }
            
        case "facebook":{
            res.json({
                speech: speech,
                displayText: text
            });
            break;
        }

        default:{
            res.json({
                speech: speech,
                displayText: text
            });
        }
    }
});


restService.listen((process.env.PORT || 9000), function() {
    console.log("Server up and listening");
});
