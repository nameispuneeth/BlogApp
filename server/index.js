const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1> Welcome To My World.... </h1>")
})

app.listen(8000,()=>{
    console.log("PORT IS RUNNING AT http://localhost:8000")
})