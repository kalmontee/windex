const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, require: true, unique: true },
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;