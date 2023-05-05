import { useState, useEffect } from "react";
import axios from "axios";

//how to put an elements in a div class?

function Store() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    axios
      .get("http://localhost:5000/api/products/table")
      .then((res) => {
        setProducts(res.data);
        setIsLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeCategory = async (category) => {
    console.log(category);
    setIsLoaded(true);
    setCategory(category);
    if (category === "All") {
      axios
        .get("http://localhost:5000/api/products/table")
        .then((res) => {
          setProducts(res.data);
          setIsLoaded(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let products = [];
      axios
        .get("http://localhost:5000/api/products/table")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].category === category) {
              products.push(res.data[i]);
              console.log(res.data[i]);
            }
          }
          setProducts(products);
          setIsLoaded(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
      <div className="w-1/2 my-0 mx-auto pt-10 flex">
        <button
          onClick={() => changeCategory("All")}
          className={`${
            category === "All" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          All
        </button>

        <button
          onClick={() => changeCategory("Gadgets")}
          className={`${
            category === "Gadgets" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          Gadgets
        </button>
        <button
          onClick={() => changeCategory("Undergarments")}
          className={`${
            category === "Undergarments" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          Undergarments
        </button>
        <button
          onClick={() => changeCategory("Food")}
          className={`${
            category === "Food" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          Food
        </button>
        <button
          onClick={() => changeCategory("Men's Wear")}
          className={`${
            category === "Food" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          Men's Wear
        </button>
        <button
          onClick={() => changeCategory("Daily Use")}
          className={`${
            category === "Food" ? "bg-blue-500" : "bg-slate-500"
          }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 `}
        >
          Daily Use
        </button>
      </div>
      {isLoaded ? (
        <div></div>
      ) : (
        <div className="mx-10 w-[95%] my-10 flex justify-between flex-wrap">
          {products.map((product) => (
            <div class="relative  flex flex-col items-center justify-center">
              <div class="container">
                <div class="my-6 w-96 relative flex  flex-col overflow-hidden bg-blue-50 rounded-lg shadow-lg border p-6">
                  <div class="flex flex-col ">
                    <div class="">
                      <div class="relative h-62  w-full mb-3 aspect-square">
                        <div class="absolute flex flex-col top-0 right-0 p-3">
                          <button class="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                        </div>
                        <img
                          src={product.imageUrl}
                          alt="Just a flower"
                          class=" w-full     rounded-2xl"
                        />
                      </div>
                      <div class="flex-auto justify-evenly">
                        <div class="flex flex-wrap ">
                          <div class="w-full flex-none text-sm flex items-center text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-red-500 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span class="text-gray-400 whitespace-nowrap mr-3">
                              4.60
                            </span>
                            <span class="mr-2 text-gray-400">India</span>
                          </div>
                          <div class="flex items-center w-full justify-between min-w-0 ">
                            <h2 class="text-lg mr-auto cursor-pointer text-gray-900 hover:text-purple-500 truncate ">
                              {product.productName}
                            </h2>
                            <div class="flex items-center bg-green-400 text-gray-900 text-xs px-2 py-1 ml-3 rounded-lg">
                              {product.category}
                            </div>
                          </div>
                        </div>
                        <div class="text-xl text-gray-900 font-semibold mt-1">
                          {product.price}
                        </div>
                        <div class="lg:flex  py-4  text-sm text-gray-600">
                          <div class="flex-1 inline-flex items-center  mb-3">
                            <div class="w-full flex-none text-sm flex items-center text-gray-600">
                              <ul class="flex flex-row justify-center items-center space-x-2">
                                <li class="">
                                  <span class="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                    <a
                                      href="#blue"
                                      class="block w-3 h-3 bg-blue-600 rounded-full"
                                    ></a>
                                  </span>
                                </li>
                                <li class="">
                                  <span class="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                    <a
                                      href="#yellow"
                                      class="block w-3 h-3  bg-yellow-400 rounded-full"
                                    ></a>
                                  </span>
                                </li>
                                <li class="">
                                  <span class="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                                    <a
                                      href="#red"
                                      class="block w-3 h-3  bg-red-500 rounded-full"
                                    ></a>
                                  </span>
                                </li>
                                <li class="">
                                  <span class="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                                    <a
                                      href="#green"
                                      class="block w-3 h-3  bg-green-500 rounded-full"
                                    ></a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="flex-1 inline-flex items-center mb-3">
                            <span class="text-secondary whitespace-nowrap mr-3">
                              Size
                            </span>
                            <div class="cursor-pointer text-gray-400 ">
                              <span class="hover:text-purple-500 p-1 py-0">
                                S
                              </span>
                              <span class="hover:text-purple-500 p-1 py-0">
                                M
                              </span>
                              <span class="hover:text-purple-500 p-1 py-0">
                                L
                              </span>
                              <span class="hover:text-purple-500 p-1 py-0">
                                XL
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex space-x-2 text-sm font-medium justify-start">
                          <button
                            onClick={() => handleAddtoCart(product)}
                            class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
                          >
                            <span>Add Cart</span>
                          </button>
                          <button class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=""
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Store;
