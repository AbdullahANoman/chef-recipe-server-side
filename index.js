const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefsCard = require('./Data/chefCard.json')

app.get("/", (req, res) => {
  res.send("Recipe is running");
});
app.get("/chefCard",(req,res)=>{
    res.send(chefsCard)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
