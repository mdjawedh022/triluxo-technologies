const mongoose=require("mongoose");

const BookSchema = mongoose.Schema({
  image: { type: String, require: true },
  title: { type: String, require: true },
  category: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
},{
    versionKry:false,
});

const BookModel=mongoose.model("books",BookSchema);


module.exports={
    BookModel
};