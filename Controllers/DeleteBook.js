const BookModel = require("../Models/book");

const DeleteBook = async (req, res) => {
  const bookId = req.params.id;
  BookModel.deleteOne({ _id: bookId }, (err, result) => {
    BookModel.find({ email: req.params.email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
};

module.exports = DeleteBook;
