import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="mt-1">
      <section class="ads section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 offset-lg-6">
              <div class="ads-content float-right mt-24">
                <span class="h5 deal">Deal of the day 50% Off</span>
                <h2 class="mt-3 text-white">Trendy Suit</h2>
                <p class="text-md mt-3 text-white">
                  Hurry up! Limited time offer.Grab ot now!
                </p>

                <div id="simple-timer" class="syotimer mb-5"></div>
                <a href="#!" class="btn btn-main">
                  <i class="ti-bag mr-2 "></i>Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
