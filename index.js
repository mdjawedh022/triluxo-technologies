const express =require("express");
require("dotenv").config();
const app=express();


app.get("/",(req,res)=>{
    res.send("welcome to book library!");
})

app.listen(process.env.port,async()=>{

console.log(`server is runniing at the port ${process.env.port}`);
})