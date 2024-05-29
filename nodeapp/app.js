const express = require("express")
const app = express();

app.listen(80,()=>{
    console.log("Server is up")
})

app.get("/",(req,res)=>{
    res.send("Server is up and running")
})

app.get("/getMsg",(req,res)=>{
    res.send("Hi, Gooooooood Morning")
})