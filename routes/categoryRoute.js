const express = require('express');

const { getCategories } = require('../services/categoryService');

const router = express.Router();

router.get('/', getCategories);

module.exports = router;
