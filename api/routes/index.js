const express = require('express');
const baseController = require('../controllers/baseController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();
const apiVersion = 'v2.0';

router.get('/', baseController.helpPage);
router.get(`/${apiVersion}`, baseController.helpPage);

router.post(`/${apiVersion}/category`, categoryController.postCategory);
router.get(`/${apiVersion}/categories`, categoryController.getCategories);
router.put(`/${apiVersion}/category/:id`, categoryController.editCategory);
router.delete(`/${apiVersion}/category/:id`, categoryController.deleteCategory);

module.exports = router;
