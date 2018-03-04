const express = require('express');
const baseController = require('../controllers/baseController');

const router = express.Router();

router.get('/', baseController.homePage);

module.exports = router;
