const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');

exports.addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body).save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.editComment = async (req, res) => {
  try {
    const post = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ parentId: req.params.id }).exec();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.voteDownComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: -1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.voteUpComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: +1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};
