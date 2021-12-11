const mongoose = require('mongoose');
// 1- Create Schema
const categorySchema = new mongoose.Schema({
  name: String,
});

// 2- Create model
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
