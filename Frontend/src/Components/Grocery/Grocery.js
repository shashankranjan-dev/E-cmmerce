import { useState, useEffect } from "react";
import axios from "axios";

function Grocery() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  //automatically works on page reload
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/table")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //to make an event we have to use function
  const handleAddtoCart = async (cartProduct) => {
    console.log(cartProduct);
    const cart = {
      productName: cartProduct.productName,
      color: cartProduct.color,
      category: cartProduct.category,
      price: cartProduct.price,
      quantity: 1,
      imageUrl: cartProduct.imageUrl,
    };

    await axios
      .post(
        `http://localhost:5000/api/carts/cart/64149b68b332bdd05b0515de`,
        cart
      )
      .then((res) => {
        console.log(res.data);
        alert("Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section class="bg-white  text-gray-700 py-8">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Product On sale
            </h2>
          </div>
          <div class="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-10 lg:mt-16">
            {products.map((product, index) => (
              <article class="relative flex flex-col overflow-hidden bg-blue-50 rounded-lg shadow-lg border ">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <div class="absolute top-0 m-2 rounded-full bg-white">
                  <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                  </p>
                </div>
                <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div class="mb-2 flex">
                    <p class="mr-3 text-lg font-bold">{product.price}</p>
                    <p class="text-sm mt-1 font-semibold text-gray-600">
                      {" "}
                      {product.category}
                    </p>
                  </div>
                  <h3 class="mb-2 text-lg font-bold text-gray-900">
                    {product.productName}
                  </h3>
                </div>

                <button
                  onClick={() => handleAddtoCart(product)}
                  class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-900"
                >
                  <div class="flex w-full font-bold items-center justify-center bg-blue-400 text-sm  transition group-hover:bg-emerald-600 group-hover:text-white">
                    Add Product
                  </div>
                  <div class="flex items-center justify-center bg-blue-300  px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                    +
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grocery;
