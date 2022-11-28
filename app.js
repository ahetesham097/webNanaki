const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _= require("lodash");




app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function(req,res){
    res.render("home");
})



app.listen(3000,function(req,res){
    console.log("Server Started");
})