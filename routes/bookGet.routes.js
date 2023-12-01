const express=require("express");
const { BookModel } = require("../model/book.model");

const getRouter=express.Router();

// ----------------------get Books---------------------
getRouter.get("/",async(req,res)=>{
    try{
  const books=await BookModel.find();
  res.send({books});
    }catch(err){
        res.send({msg:"Somthing went wrong 😔!"})
    }
});

// -------------------get book by id----------------------


getRouter.get("/:id",async(req,res)=>{
    try{
   const {id}=req.params;
   const books=await BookModel.find({_id:id});
   res.send(books);
    }catch(err){
    res.send({msg:"somthing went wrong 😊!"})
    }
});

module.exports={
    getRouter
};