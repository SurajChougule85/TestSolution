
const express=require("express");
const bodyparser = require("body-parser")
const app=express();

app.use(bodyparser.urlencoded({extends:false}));
app.get('/',(req,res)=>{
    res.sendFile("./index.html",{root:__dirname});
})
app.listen(4001,()=>{
    console.log("our server is working on http://localhost:4001")
})