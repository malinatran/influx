var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password_hash: { type: String, select: false },
  favorites: { type: Array, default: [] }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;