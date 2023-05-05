const Coupon = require("../model/coupon");

const express = require("express");
const router = express.Router();

router.post("/coupon", (req, res) => {
  const { code, discount } = req.body;

  const coupon = new Coupon({
    code,
    discount,
  });

  coupon.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("coupon added successfully.");
    }
  });
});

router.get("/:coupon", (req, res) => {
  const { coupon } = req.params;
  Coupon.findOne({ code: coupon }, (err, coupon) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the coupon.");
    } else {
      res.send(coupon);
    }
  });
});

// const isValid = isValidCoupon("COUPONCODE");

// if (!isValid) {
//   // Coupon is invalid, show error message
// }

// async function isValidCoupon(code) {
//   const coupon = await Coupon.findOne({ code });

//   if (!coupon) {
//     return false;
//   }

//   if (!coupon.isActive) {
//     return false;
//   }

//   if (coupon.expiryDate.getTime() < Date.now()) {
//     return false;
//   }

//   return true;
// }
module.exports = router;
