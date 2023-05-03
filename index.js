const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefsCard = require("./Data/chefCard.json");
const chefDetails = require("./Data/chefDetails.json");
app.get("/", (req, res) => {
  res.send("Recipe is running");
});
app.get("/chefCard", (req, res) => {
  res.send(chefsCard);
});
app.get("/chefDetails", (req, res) => {
  res.send(chefDetails.chefs);
});
app.get('/chefDetails/:id', (req, res) => {
  const id = req.params.id;
  const selectedChefDetails = chefDetails.chefs.filter(n => n._id == id);
  res.send(selectedChefDetails);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
