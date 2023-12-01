const express = require("express");
const { BookModel } = require("../model/book.model");

const delRouter = express.Router();

delRouter.delete("delete/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const deleteBook = await BookModel.findByIdAndRemove(bookId);
    if (!deleteBook) {
      return res.send({ msg: "Book not found!" });
    }
    res.send({ msg: "Book deleted successfully!" });
  } catch (err) {
    res.send({ msg: "Internal server error!" });
  }
});
module.exports = delRouter;
