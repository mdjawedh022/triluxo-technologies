const express = require("express");
const { BookModel } = require("../model/book.model");

const delRouter = express.Router();

delRouter.delete("/delete/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteBook = await BookModel.findByIdAndDelete({_id:id});
    if (!deleteBook) {
      return res.send({ msg: "Book not found!" });
    }
    res.send({ msg: "Book deleted successfully!", book: deleteBook });
  } catch (err) {
    res.send({ msg: "Internal server error!",err });
  }
});
module.exports = delRouter;
