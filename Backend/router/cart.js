const express = require("express");
const router = express.Router();

const Cart = require("../model/cart");
const User = require("../model/User");

router.get("/cart/:id", (req, res) => {
  User.findById(req.params.id, { cart: 1, _id: 0 }, (err, cart) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the cart.");
    } else {
      console.log(cart);
      res.status(200).send(cart);
    }
  });
});

router.post("/cart/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { productName, color, category, price, quantity, imageUrl } = req.body;

  const cart = new Cart({
    productName,
    color,
    category,
    price,
    quantity,
    imageUrl,
  });

  User.findOneAndUpdate({ _id: id }, { $push: { cart: cart } }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.");
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/cart/:id", (req, res) => {
  const { productName, color, category, price, quantity, imageUrl } = req.body;

  Cart.findByIdAndUpdate(
    req.params.id,
    {
      productName,
      color,
      category,
      price,
      quantity,
      imageUrl,
    },
    (err, cart) => {
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

router.delete("/cart/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
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
