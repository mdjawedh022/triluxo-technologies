const express = require("express");
const { BookModel } = require("../model/book.model");

const putRouter = express.Router();
//update a book by id with put method;
putRouter.put("/update/:id", async (req, res) => {
  try {
    const { image, title, category, price, description } = req.body;
    const bookId = req.params.id;

    const existBook = await BookModel.findById(bookId);
    if (!existBook) {
      return res.send({ msg: "Book not found!" });
    }
    // Update book details
    existBook.image = image;
    existBook.title = title;
    existBook.category = category;
    existBook.price = price;
    existBook.description = description;

    // Save the updated book
    await existBook.save();
    res.send({ msg: "Book updated successfully", book: existBook });
  } catch (err) {
    res.send({ msg: "Intternal server error" });
  }
});

module.exports = putRouter;
