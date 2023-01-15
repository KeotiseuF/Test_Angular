const express = require("express");
const postRoutes  = require("./routes/post") 
const morgan = require("morgan")

const app = express();
const port = 3000;

app.use(morgan("dev"))
app.use("/", postRoutes)

app.listen(port, () => { return `API is listening on port : ${port}`});