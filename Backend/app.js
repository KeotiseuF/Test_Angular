const express = require("express");
const morgan = require("morgan")
const post = require("./routes/userId"); 
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader( "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

//mongodb+srv://curtis:Bt4TxcxUOSR5nUGl@cluster0.a40ry.mongodb.net/?retryWrites=true&w=majority

app.use(morgan("dev"));
app.use(post);

module.exports = app;

