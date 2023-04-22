const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = ["Go to gym", "Drink a coffee", "Work on my projects"];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
port = 3200;

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  console.log(req.body);
  res.redirect("/");
});
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work day", newListItems: workItems });
});
app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
