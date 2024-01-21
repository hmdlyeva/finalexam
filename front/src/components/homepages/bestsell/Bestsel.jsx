import React from "react";
import "./bestsel.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
const Bestsel = () => {
  return (
    <section id="bestsel">
      <div className="bestsel">
        <div className="container">
          <div className="my">
            <div className="upper">
              <div className="left">
                <h1>Best Sellers</h1>
                <p>Shop</p>
              </div>
              <div className="right">
                <p>Next | Previous</p>
              </div>
            </div>

            <div className="cards">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  700: {
                    slidesPerView: 2,
                  },
                  1100: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>

                    <div className="detail">
                      <h2>Quartz Belt Watch</h2>

                      <div className="right">
                        <p>$150.00</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <div className="image1"></div>

                    <div className="detail">
                      <h2>Quartz Belt Watch</h2>

                      <div className="right">
                        <p>$150.00</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div  className="card">
                    <div className="image2"></div>

                    <div className="detail">
                      <h2>Quartz Belt Watch</h2>

                      <div className="right">
                        <p>$150.00</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>

                    <div className="detail">
                      <h2>Quartz Belt Watch</h2>

                      <div className="right">
                        <p>$150.00</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div  className="card">
                    <div className="image1"></div>

                    <div className="detail">
                      <h2>Quartz Belt Watch</h2>

                      <div className="right">
                        <p>$150.00</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsel;
