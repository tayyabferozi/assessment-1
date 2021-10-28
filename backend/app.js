require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const Product = mongoose.model(
  "Product",
  mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  })
);

app.get("/api/products", (req, res) => {
  Product.find()
    .then((foundProds) => {
      res.json({ products: foundProds });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Something went wrong" });
    });
});

const products = [
  {
    name: "BIG STUFF BURGER",
    description: "fontina, gruyere, truffle oil on multigrain toast",
    price: 15,
  },
  {
    name: "VEGETABLE BURGER",
    description: "steak, havarti, fried onions, chipotle mayo on challa",
    price: 14,
  },
  {
    name: "BURGER TO BEER",
    description: "steak, havarti, fried onions, chipotle mayo on challa",
    price: 17,
  },
  {
    name: "CLASSIC BURGER",
    description: "fontina, gruyere, truffle oil on multigrain toast",
    price: 14,
  },
  {
    name: "CHIKEN BURGER",
    description: "steak, havarti, fried onions, chipotle mayo on challa",
    price: 22,
  },
  {
    name: "CHEESE BURGER",
    description: "fontina, gruyere, truffle oil on multigrain toast",
    price: 19,
  },
  {
    name: "STEAKE BURGER",
    description: "steak, havarti, fried onions, chipotle mayo on challa",
    price: 29,
  },
  {
    name: "KOLBERN BURGER",
    description: "steak, havarti, fried onions, chipotle mayo on challa",
    price: 32,
  },
  {
    name: "VEGETABLE BURGER",
    description: "fontina, gruyere, truffle oil on multigrain toast",
    price: 14,
  },
];
const port = process.env.PORT;
const dbString = process.env.DB_STRING;

mongoose
  .connect(dbString)
  .then(() => {
    Product.deleteMany().then((deletedProds) =>
      Product.insertMany(products).then(() => {
        app.listen(port, () => {
          console.log("Server started on port " + port);
        });
      })
    );
  })
  .catch(console.log);
