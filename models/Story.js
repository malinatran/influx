var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
  date: String,
  location: String,
  prompt: String,
  image: String,
  anecdote: String,
  user: { type: mongoose.Schema.Types.ObjectId, re: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var Story = mongoose.model('Story', StorySchema);
module.exports = Story;