const BookModel = require("../Models/book");

const FetchBooks = async (request, res) => {
  BookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("result");
      res.send(result);
    }
  });
};

module.exports = FetchBooks;
