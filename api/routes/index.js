const express = require('express');
const baseController = require('../controllers/baseController');
const categoryController = require('../controllers/categoryController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

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
router.post(`/${apiVersion}/posts/vote/up/:id/`, postController.voteUpPost);
router.post(`/${apiVersion}/posts/vote/down/:id/`, postController.voteDownPost);

router.post(`/${apiVersion}/comments`, commentController.addComment);
router.get(`/${apiVersion}/posts/:id/comments`, commentController.getComments);
router.put(`/${apiVersion}/comments/:id/`, commentController.editComment);
router.delete(`/${apiVersion}/comments/:id/`, commentController.deleteComment);
router.post(
  `/${apiVersion}/comments/vote/up/:id/`,
  commentController.voteUpComment
);
router.post(
  `/${apiVersion}/comments/vote/down/:id/`,
  commentController.voteDownComment
);

module.exports = router;
