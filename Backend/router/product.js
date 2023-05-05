const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/table", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.get("/table/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the product with id ${req.params.id}.`
        );
    } else {
      res.send(product);
    }
  });
});

router.post("/table", (req, res) => {
  const { productName, color, category, price, imageUrl } = req.body;

  const product = new Product({
    productName,
    color,
    category,
    price,

    imageUrl,
  });

  product.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/table/:id", (req, res) => {
  const { productName, color, category, price, imageUrl } = req.body;

  Product.findByIdAndUpdate(
    req.params.id,
    {
      productName,
      color,
      category,
      price,

      imageUrl,
    },
    (err, product) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the product with id ${req.params.id}.`
          );
      } else {
        res.send("Product updated successfully.");
      }
    }
  );
});

router.delete("/table/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while deleting the product with id ${req.params.id}.`
        );
    } else {
      res.send("Product deleted successfully.");
    }
  });
});

module.exports = router;
