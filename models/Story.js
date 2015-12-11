var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
  location: String,
  image: String,
  anecdote: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var Story = mongoose.model('Story', StorySchema);
module.exports = Story;