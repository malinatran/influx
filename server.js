// Requirements
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var md5 = require('md5');
var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

// Listener
app.listen(port);

// Models
var User = require('./models/user.js');
var SurveyResponse = require('./models/story.js');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

// Database
mongoose.connect('mongodb://localhost/influx');