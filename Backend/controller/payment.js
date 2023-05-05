const crypto = require("crypto");
const Razorpay = require("razorpay");
const router = require("express").Router();

router.post("/verification", async (req, res) => {
  // do a validation
  const secret = "12345678";

  console.log(req.body);
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    console.log(req.body);

    const payment = req.body;
    const time = new Date();
    const paymentD = {
      ...payment,
      paymentMade: time,
    };
    const id = req.body.payload.payment.entity.notes.id;
    const amountInRupee =
      parseInt(req.body.payload.payment.entity.amount) / 100;
    const walletCoin = amountInRupee / 10;
    if (id) {
      const storeData = await Store.findOne({ _id: id });

      await Store.update(
        { _id: id },
        {
          $push: {
            wallet: paymentD,
          },
          $set: {
            one24coin: storeData.one24coin + walletCoin,
          },
        },
        {
          new: true,
        }
      )
        .then((resData) => {
          console.log("Payment Processed !!");
        })
        .catch((err) => {
          res.json(err);
        });
    }
  } else {
  }
  res.json({ status: "ok" });
});

// Create Order

router.post("/create-order", async (req, res) => {
  // console.log(req.body.amount);
  // console.log(req.body.receipt);
  var instance = new Razorpay({
    key_id: "rzp_test_fGYhVwrmlEKqDS",
    key_secret: "WSg80rQQVmS9UWQyV0WNBPFK",
  });
  var options = {
    amount: req.body.amount,
    receipt: req.body.receipt,
    currency: "INR",
    payment_capture: "1",
  };
  instance.orders.create(options, function (err, order) {
    res.send(order);
  });
});

module.exports = router;
