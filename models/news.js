var mongoose = require('mongoose');
var NewsSchema = new mongoose.Schema({
    
    title: String,
    author: String,
    description: String,
    published_year: String,
    
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('news', NewsSchema);