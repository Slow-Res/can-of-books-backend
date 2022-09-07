const BookModel = require("../Models/book");

const CreateBook = async (req, res) => {
  let newBook = new BookModel({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    email: req.body.email,
    name: req.body.name,
  });

  try {
    await newBook.save();

    BookModel.find({ email: req.body.email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Message: error.message, error: true });
  }
};

module.exports = CreateBook;
