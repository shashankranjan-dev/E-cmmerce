import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import useMediaQuery from "../../hooks/useMediaQuery";

function index() {
  SwiperCore.use([Autoplay]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isDesktop = useMediaQuery("(min-width: 991px)");
  return (
    <>
      <div className=" ">
        <div className="px-3 py-12">
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
              <div className="lg:flex md:flex block justify-center">
                <div className="flex ">
                  <div className="bg-gray-800 max-w-[66px] w-full">
                    <p className="xl:text-2xl lg:text-base font-semibold leading-normal text-white -rotate-90 whitespace-nowrap 2xl:mt-32 xl:mt-[130px] lg:mt-[140%] md:mt-[85px] mt-28">
                      Upto 50% Off
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                      alt="shoes"
                      className="lg:hidden md:hidden block"
                    />
                  </div>
                </div>

                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20194.png"
                    alt="shoes"
                    className="lg:block md:hidden hidden"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ff.png"
                    className="lg:hidden md:block hidden"
                    alt=""
                  />
                </div>
                <div className="bg-gray-800 lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                  <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                    Modern Fashion
                  </p>
                  <p className="text-xs text-center text-white pt-4">
                    Shop enchanting designs with bold and classy colors at
                    discunted price
                  </p>
                </div>
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes.png"
                    alt="sandles"
                    className="lg:block md:hidden block"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shoes2.png"
                    alt=""
                    className="lg:hidden md:block hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* another banner */}
              <div className="px-4 py-2">
                <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-gray-200 lg:px-10 md:px-6 px-4 py-6">
                  <div className="md:flex justify-center gap-8 items-center">
                    <div>
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hair_care.png"
                        alt="hair_care"
                        className="lg:block md:hidden block"
                      />
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%2015.png"
                        alt
                        className="lg:hidden md:block hidden"
                      />
                    </div>
                    <div>
                      <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
                        Hair Care
                      </p>
                      <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center">
                        “Spoil” your hair with our new hair restoration mask.
                        Manage common hair related problems such as hair fall,
                        dryness, dandruff, frizzy hair, thinning hair with our
                        new product.
                      </p>
                      <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <button className="bg-gray-800 text-base font-medium  w-full px-3 py-2 text-white mt-6 hover:bg-gray-700 transition duration-300 ease-in-out lg:hidden md:block hidden">
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* another banner */}
              <div className="container mx-auto py-2 md:py-2 px-4 md:px-6">
                <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                  <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-200 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Best Deal
                      </h1>
                      <p className="text-base lg:text-xl text-gray-800 mt-2">
                        Save upto <span className="font-bold">50%</span>
                      </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                      <img
                        src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-200 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Game Console
                      </h1>
                      <p className="text-base lg:text-xl text-gray-800">
                        Save Upto <span className="font-bold">30%</span>
                      </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                      <img
                        src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                        alt=""
                        className="md:w-20 md:h-20 lg:w-full lg:h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default index;
