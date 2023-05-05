const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const paymentRoute = require("./controller/payment");

// //Import Routes
const userRoute = require("./router/userRoute");
const product = require("./router/product");

const cart = require("./router/cart");
const coupon = require("./router/coupon");

app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
// Set EJS as templating engine
const posts = [
  { title: "Title 1", body: "Body 1" },
  { title: "Title 2", body: "Body 2" },
  { title: "Title 3", body: "Body 3" },
  { title: "Title 4", body: "Body 4" },
];
const user = {
  firstName: "Table",
  lastName: "Editor",
  admin: true,
};
const person = {
  firstName: "Tim",
  lastName: "Cook",
  admin: true,
};

app.get("/", (req, res) => {
  res.render("pages/index", {
    user,
    title: "Home Page",
  });
});
app.get("/articles", (req, res) => {
  res.render("pages/articles", {
    articles: posts,
    title: "Articles",
  });
});
app.get("/about", (req, res) => {
  res.render("pages/about", {
    person,
    title: "About Page",
  });
});

// const MongoDBURI = "mongodb+srv://shashank:M3y3pnUtCvHIcaVP@cluster0.v45jfaq.mongodb.net/?retryWrites=true&w=majority"
const uri =
  "mongodb+srv://Shashank:bYkgnwIYMfHqmoKk@cluster0.wtnl1jl.mongodb.net/?retryWrites=true&w=majority";

// //Connect to DB command
mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use("/api/razorpay", paymentRoute);
app.use("/api/user", userRoute);
app.use("/api/products", product);
app.use("/api/carts", cart);
app.use("/api/coupons", coupon);

// Callback function to listen to changes unless manually exited.
app.listen(port, () => {
  console.log(`Welcome to the tech world at PORT: ${port}`);
});
//the end
