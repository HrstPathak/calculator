const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const StaticPath = path.join(__dirname + "/src/");
app.use(express.static("src"));
app.get("/Calculator", (req, res) => {
  res.sendFile(StaticPath + "index.html");
});
app.listen(port);
