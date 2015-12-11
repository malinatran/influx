var mongoose = require('mongoose');
var SurveyResponseSchema = require('./story').schema;

var UserSchema = new mongoose.Schema({
  username: String,
  password_hash: { type: String, select: false }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;