const BookModel = require("../Models/book");

/*

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

*/
const MockData = async (title, desc, status) => {
  let book = new BookModel({
    title: title,
    description: desc,
    status: status,
  });

  await book.save();
};

module.exports = MockData;
