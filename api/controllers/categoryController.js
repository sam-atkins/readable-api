const mongoose = require('mongoose');

const Category = mongoose.model('Category');

exports.postCategory = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.editCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    ).exec();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};
