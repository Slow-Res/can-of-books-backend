const BookModel = require("../Models/book");

const CreateBook = async (req, res) => {
  let newBook = new BookModel({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    await newBook.save();
    res.status(301).send({ Message: "New Book Created", error: false });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Message: error.message, error: true });
  }
};

module.exports = CreateBook;
