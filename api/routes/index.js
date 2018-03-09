const express = require('express');
const baseController = require('../controllers/baseController');
const categoryController = require('../controllers/categoryController');
const postController = require('../controllers/postController');

const router = express.Router();
const apiVersion = 'v2.0';

router.get('/', baseController.helpPage);
router.get(`/${apiVersion}`, baseController.helpPage);

router.post(`/${apiVersion}/category`, categoryController.postCategory);
router.get(`/${apiVersion}/categories`, categoryController.getCategories);
router.put(`/${apiVersion}/category/:id`, categoryController.editCategory);
router.delete(`/${apiVersion}/category/:id`, categoryController.deleteCategory);

router.get(`/${apiVersion}/posts`, postController.getPosts);
router.post(`/${apiVersion}/posts`, postController.addPost);
router.put(`/${apiVersion}/posts/:id`, postController.editPost);
router.delete(`/${apiVersion}/posts/:id`, postController.deletePost);

module.exports = router;
