// Requirements
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var md5 = require('md5');
var cookieParser = require('cookie-parser');
var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

var router = express.Router();
var port = process.env.PORT || 3000;

// Listener
app.engine('.hbs', handlebars({
  defaultLayout: 'single',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.listen(port);

// Models
var User = require('./models/user.js');
var Story = require('./models/story.js');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

// Database
mongoose.connect('mongodb://localhost/influx');

app.get('/', function(req, res) {
  Story.find().sort('-date').exec(function(err, stories) {
    res.render('index', {
      stories: stories,
      isUserLoggedIn: (typeof req.cookies.loggedInId !== 'undefined')
    });
  });
});

// 1. Signup new user
app.post('/users', function(req, res) {
  var password_hash = md5(req.body.password);
  var user = new User({
    username: req.body.username,
    password_hash: password_hash
  });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log('User is created.');
      res.cookie('loggedInId', user.id, { maxAge:31556952000 });
      res.redirect('/');
    }
  });
});

// 2. Login user
app.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username,
    password_hash: md5(req.body.password)
  }, function(err, user) {
    if (!user) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log('User is logged in.');
      res.cookie('loggedInId', user.id);
      res.redirect('/');
    };
  });
});

app.get('/logout', function(req, res) {
  res.clearCookie('loggedInId');
  res.redirect('/');
});

// 3. Create new story
app.post('/stories', function(req, res) {
  var story = new Story({
    location: req.body.location,
    prompt: req.body.prompt, 
    anecdote: req.body.anecdote,
    image: req.body.image,
    user: req.cookies.loggedInId
  });
  story.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Story is created.');
      res.redirect('/');
    }
  });
});

// 4. Get user's stories
app.get('/stories', function(req, res) {
  var user_id = req.cookies.loggedInId;
  Story.find({"user": user_id}).sort('-date').exec(function(err,stories) {
    res.send(stories);
  });
});


