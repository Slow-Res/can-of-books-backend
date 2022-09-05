"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//const PORT = process.env.PORT || 3001;
const PORT = process.env.PORT;
function ServerInit() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Books API </h1>");
  });
}

/******************************************* */
const FetchBooks = require("./Controllers/FetchBooks");
const AddBook = require("./Controllers/AddBook");
const DeleteBook = require("./Controllers/DeleteBook");
const BookModel = require("./Models/book");
/******************************************* */

app.get("/books", FetchBooks);
app.post("/book", AddBook);
app.delete("/deleteBook/:id", DeleteBook);

ServerInit();
