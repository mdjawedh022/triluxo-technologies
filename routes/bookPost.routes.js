const express = require("express");
const { BookModel } = require("../model/book.model");

const postRouter = express.Router();

postRouter.post("/add", async (req, res) => {
  try {
    const { image, title, category, price, description } = req.body;
    const newBook = new BookModel({
      image,
      title,
      category,
      price,
      description,
    });
    await newBook.save();
    res.send({ msg: "Book created successfully" });
  } catch (err) {
    res.send({ msg: "Internal server error" });
  }
});

module.exports = postRouter;
