const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [
  "Go to gym",
  "Do some code",
  "Drink a coffee",
  "Work on my projects",
];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
port = 3000;

app.get("/", (req, res) => {
  let today = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: items });
});
app.post("/", (req, res) => {
  item = req.body.username;
  items.push(item);
  res.redirect("/");
});
app.listen(port, () => {
  console.log("server is running on port 3000");
});
