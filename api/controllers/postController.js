const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.addPost = async (req, res) => {
  try {
    const postToSave = {
      ...req.body,
      voteScore: 0,
      commentCount: 0,
      deleted: false,
    };
    const post = await new Post(postToSave).save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

const removeChildrenComments = async parentId => {
  try {
    await Comment.deleteMany({
      parentId,
    });
    const result = {
      removedChildrenComments: 'removed',
    };
    return result;
  } catch (error) {
    const result = {
      removedChildrenComments: `${error}`,
    };
    return result;
  }
};

exports.deletePost = async (req, res) => {
  try {
    const removePost = await Post.findOneAndRemove({
      _id: req.params.id,
    });
    const removeComments = await removeChildrenComments(req.params.id);
    const result = [removePost, removeComments];

    res.status(200).json(result);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.voteDownPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: -1 } },
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

exports.voteUpPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: +1 } },
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

exports.incrementCommentCount = async postId => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: postId },
      { $inc: { commentCount: +1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    return post;
  } catch (error) {
    return false;
  }
};

exports.decrementCommentCount = async postId => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: postId },
      { $inc: { commentCount: -1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    return post;
  } catch (error) {
    return false;
  }
};
