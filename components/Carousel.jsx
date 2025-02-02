"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div
      className="max-w-7xl mx-auto"
      style={{
        filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        // autoplay={{ delay: 1000 }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
            <section className="lg:space-y-6 space-y-sm">
              <header className="lg:space-y-6 space-y-xs">
                <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                  Customer focused
                </h6>{" "}
                <h3 className="text-4xl font-semibold text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat py-">
                  Purpose-built financial services
                </h3>
              </header>{" "}
              <figure className="md:hidden h-[150px]">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                  width="3672"
                  height="2712"
                  alt="Customer Focused"
                  className="h-full w-full object-cover rounded-[8px]"
                  sizes="max-width(768px) 90vw, 0px"
                  loading="lazy"
                />
              </figure>{" "}
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>
                      Elevate customer experience and achieve agile financial
                      product innovation with the world’s first,
                      consumer-centric, real-time transaction account processing
                      and credit limit system.
                    </strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Experience the advantages of integrated retail financial
                    services technology, real-time analysis of transactional
                    behaviour and product marketing opportunities.
                  </p>
                </div>
              </div>
            </section>{" "}
            <figure className="hidden md:block h-[425px]">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                width="3672"
                height="2712"
                alt="Customer Focused"
                className="h-full w-full object-cover rounded-[16px]"
                sizes="35vw"
                loading="lazy"
              />
            </figure>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
            <section className="lg:space-y-6 space-y-sm">
              <header className="lg:space-y-6 space-y-xs">
                <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                  Agile and adaptable
                </h6>{" "}
                <h3 className="text-4xl font-semibold text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat py-">
                  Agile and adaptable for growth
                </h3>
              </header>{" "}
              <figure className="md:hidden h-[150px]">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?auto=format"
                  width="3672"
                  height="2712"
                  alt="Customer Focused"
                  className="h-full w-full object-cover rounded-[8px]"
                  sizes="max-width(768px) 90vw, 0px"
                  loading="lazy"
                />
              </figure>{" "}
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>
                      Innovate with evolving customer demands through our open
                      platform-based technology architecture. Stay ahead of the
                      ever-changing financial landscape with a strong focus on
                      security, compliance and performance.
                    </strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Experience the advantages of integrated retail financial
                    services technology, real-time analysis of transactional
                    behaviour and product marketing opportunities.
                  </p>
                </div>
              </div>
            </section>{" "}
            <figure className="hidden md:block h-[425px]">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                width="3672"
                height="2712"
                alt="Customer Focused"
                className="h-full w-full object-cover rounded-[16px]"
                sizes="35vw"
                loading="lazy"
              />
            </figure>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
            <section className="lg:space-y-6 space-y-sm">
              <header className="lg:space-y-6 space-y-xs">
                <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                  Customer focused
                </h6>{" "}
                <h3 className="text-4xl font-semibold text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat py-">
                  Purpose-built financial services
                </h3>
              </header>{" "}
              <figure className="md:hidden h-[150px]">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?auto=format"
                  width="3672"
                  height="2712"
                  alt="Customer Focused"
                  className="h-full w-full object-cover rounded-[8px]"
                  sizes="max-width(768px) 90vw, 0px"
                  loading="lazy"
                />
              </figure>{" "}
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>
                      Elevate customer experience and achieve agile financial
                      product innovation with the world’s first,
                      consumer-centric, real-time transaction account processing
                      and credit limit system.
                    </strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Experience the advantages of integrated retail financial
                    services technology, real-time analysis of transactional
                    behaviour and product marketing opportunities.
                  </p>
                </div>
              </div>
            </section>{" "}
            <figure className="hidden md:block h-[425px]">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                width="3672"
                height="2712"
                alt="Customer Focused"
                className="h-full w-full object-cover rounded-[16px]"
                sizes="35vw"
                loading="lazy"
              />
            </figure>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
            <section className="lg:space-y-6 space-y-sm">
              <header className="lg:space-y-6 space-y-xs">
                <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                  Customer focused
                </h6>{" "}
                <h3 className="text-4xl font-semibold text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat py-">
                  Purpose-built financial services
                </h3>
              </header>{" "}
              <figure className="md:hidden h-[150px]">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?auto=format"
                  width="3672"
                  height="2712"
                  alt="Customer Focused"
                  className="h-full w-full object-cover rounded-[8px]"
                  sizes="max-width(768px) 90vw, 0px"
                  loading="lazy"
                />
              </figure>{" "}
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>
                      Elevate customer experience and achieve agile financial
                      product innovation with the world’s first,
                      consumer-centric, real-time transaction account processing
                      and credit limit system.
                    </strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Experience the advantages of integrated retail financial
                    services technology, real-time analysis of transactional
                    behaviour and product marketing opportunities.
                  </p>
                </div>
              </div>
            </section>{" "}
            <figure className="hidden md:block h-[425px]">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                width="3672"
                height="2712"
                alt="Customer Focused"
                className="h-full w-full object-cover rounded-[16px]"
                sizes="35vw"
                loading="lazy"
              />
            </figure>
          </article>
        </SwiperSlide>
      </Swiper>
      {/* article */}
    </div>
  );
};

export default Carousel;
