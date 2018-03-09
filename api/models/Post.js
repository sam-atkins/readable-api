const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please enter a title name',
  },
  body: {
    type: String,
    trim: true,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: 'You must supply a category id.',
  },
  author: {
    type: String,
    trim: true,
    required: 'Please provide an author name',
  },
  voteScore: {
    type: Number,
  },
  deleted: {
    type: Boolean,
  },
  commentCount: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
