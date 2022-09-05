const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING_DB, {
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
