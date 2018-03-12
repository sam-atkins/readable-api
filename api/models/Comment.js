const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: 'You must supply a Post parentId.',
  },
  body: {
    type: String,
    trim: true,
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
  parentDeleted: {
    type: Boolean,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
