const express = require("express");
const bodyParser = require('body-parser');

const db = require('./db/db');

//PORT
const port = 3000;

var app = new express();

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/",(req,res)=>{
    res.sendFile((__dirname+ '/view/index.html'));
});

app.post("/user-add",(req,res)=>{
    db.dbConn.then((client)=>{
        db.insertOneUser(client,req.body.username,req.body.password);
    })

    res.redirect("/");
});

app.get("/showdata"(req,res)=>{
    res.sendFile((__dirname+'/view/showdata.html'));
});

app.listen(3000,()=>{
    console.log("Started on port ",port);
});