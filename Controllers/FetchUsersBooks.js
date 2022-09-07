const BookModel = require("../Models/book");

const FetchUsersBooks = async (req, res) => {
  let email = req.params.email;
  BookModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("result");
      res.send(result);
    }
  });
};

module.exports = FetchUsersBooks;
