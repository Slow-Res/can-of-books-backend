const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BooksDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model("Books", BookSchema);

module.exports = BookModel;
