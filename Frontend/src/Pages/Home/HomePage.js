import React from "react";
import Home from "../../Components/Home/Home";
import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import Bestseller from "../../Components/Bestseller/Bestseller";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
  return (
    <div>
      <Home />
      <Banner />
      <Bestseller />
      <Product />
      <Feature />

      <Footer />
    </div>
  );
}

export default HomePage;
