const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.static("portfolio/build"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./portfolio/build/index.html"));
});

app.listen(PORT, function(){
  console.log("listening..");
});