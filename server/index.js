const express=require("express");
const app=express();
app.use(express.json()); 

app.get("/",(req,res)=>{
    res.send("<h1> Welcome To My World.... </h1>")
})
app.post("/api/login",(req,res)=>{
    console.log(req.body);
    res.send({status:'ok'})
})
app.listen(8000,()=>{
    console.log("PORT IS RUNNING AT http://localhost:8000")
})