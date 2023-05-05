const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  //   expiryDate: {
  //     type: Date,
  //     required: true,
  //   },
  //   isActive: {
  //     type: Boolean,
  //     required: true,
  //     default: true,
  //   },
});

module.exports = mongoose.model("Coupon", couponSchema);
