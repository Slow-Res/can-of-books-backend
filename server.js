"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const createBook = require("./Controllers/MockData");
const BookModel = require("./Models/book");

// createBook("TEST BOOK ", "THIS IS JUST A TEST BOOK FOR DEMO", "IN STOCK");
// createBook(
//   "JUST A BOOK ",
//   "DEMO ROMANCE BOOK, THIS IS JUST A TEST BOOK FOR DEMO",
//   "OUT STOCK"
// );

app.get("/books", (request, res) => {
  BookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
