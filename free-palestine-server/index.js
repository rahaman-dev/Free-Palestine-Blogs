const express = require("express");
var cors = require("cors");
const app = express();
const port = 300;
const allFakeData = require("./allFakeData.json");

app.use(cors());

app.get("/allBlogs", (req, res) => {
  res.send(allFakeData);
});

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/allBlogs/:id", (req, res) => {
  const id = req.params.id;
  const singleDta = allFakeData.find((singleDta) => singleDta._id === id) || {};
  res.send(singleDta);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
