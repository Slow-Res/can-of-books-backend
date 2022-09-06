const BookModel = require("../Models/book");

const UpdateBook = (req, res) => {
  console.log("GOT PUT REQUEST");
  console.log(req.body);
  const id = req.params.id;
  const { title, description, status } = req.body;

  BookModel.findByIdAndUpdate(
    id,
    { title, description, status },
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        BookModel.find({}, (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(result);
          }
        });
      }
    }
  );
};

module.exports = UpdateBook;
