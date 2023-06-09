const mongoose = require("mongoose");

const DocumentModel = mongoose.Schema({
  title: String,
  author: String,
  publish: Date,
  year: Number,
  faculty: String,
  major: String,
  file: String,
  image: String
});

const Document = mongoose.model("documents", DocumentModel);

module.exports = Document;
