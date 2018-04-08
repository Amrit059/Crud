var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    image:String,
    published_year: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Book', BookSchema);