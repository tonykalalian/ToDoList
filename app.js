const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Go to gym", "Drink a coffee", "Work on my projects"];
const workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
port = 3200;

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work day") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work day", newListItems: workItems });
});
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  console.log(req.body);
  res.redirect("/work");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.listen(port || process.env.PORT , () => {
  console.log(`server is running on port ${port}`);
});
