const express = require("express");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const app =express()

app.use(express.json())

const port = process.env.PORT || 3000

async function Use(){
    await axios.get("http://localhost3000/User/Get")
    .then(res=>res.data)
    .catch(err=>console.log(err))
}

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})