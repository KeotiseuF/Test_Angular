const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const post = require("./routes/userId"); 

const app = express();

mongoose.connect("mongodb+srv://curtis:WazoWUVxNPpGq40w@cluster0.a40ry.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connexion BDD OK !")
})
.catch((e) => {
    console.log(`Fail connexion to BDD : ${e}`)
});

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader( "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(morgan("dev"));
app.use(post);

module.exports = app;