import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";

function Category() {
  SwiperCore.use([Autoplay]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isDesktop = useMediaQuery("(min-width: 991px)");

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
    <>
      <div className=" ">
        <div className="px-3 ">
          <Swiper
            // slidesPerView={isDesktop ? 1 : 1.45}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            autoplay={true}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <section class="bg-white  text-gray-700 ">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                  <div class=" max-w-md">
                    <h2 class=" mt-4 text-2xl text-black font-bold sm:text-3xl">
                      Women's Collection :
                    </h2>
                  </div>
                  <div class=" grid grid-cols-3 gap-6 sm:grid-cols-5 sm:gap-10 mt-8 ">
                    {products.map((product, index) => {
                      if (product.category === "women") {
                        return (
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
                                <p class="mr-3 text-lg font-bold">
                                  {product.productName}
                                </p>
                                <p class="text-sm mt-1 font-semibold text-gray-600">
                                  {" "}
                                  {product.variety}
                                </p>
                              </div>
                              <h3 class="mb-2 text-lg font-bold text-gray-900">
                                Rs. {product.price}
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
                        );
                      }
                    })}
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="px-3 mt-10 ">
          <Swiper
            // slidesPerView={isDesktop ? 1 : 1.45}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            autoplay={true}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <section class="bg-white  text-gray-700 ">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                  <div class=" max-w-md">
                    <h2 class=" mt-4 text-2xl text-black font-bold sm:text-3xl">
                      Men's Collection :
                    </h2>
                  </div>
                  <div class=" grid grid-cols-3 gap-6 sm:grid-cols-5 sm:gap-10 mt-8 ">
                    {products.map((product, index) => {
                      if (product.category === "Men's Wear") {
                        return (
                          <article class="relative  overflow-hidden bg-blue-50 rounded-lg shadow-lg border ">
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
                                <p class="mr-3 text-lg font-bold">
                                  {product.productName}
                                </p>
                                <p class="text-sm mt-1 font-semibold text-gray-600">
                                  {" "}
                                  {product.variety}
                                </p>
                              </div>
                              <h3 class="mb-2 text-lg font-bold text-gray-900">
                                Rs. {product.price}
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
                        );
                      }
                    })}
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Category;
