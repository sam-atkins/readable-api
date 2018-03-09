const mongoose = require('mongoose');
const slug = require('slugs');

mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please enter a category name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

categorySchema.pre('save', async function preSchemaSaveHook(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Category', categorySchema);
