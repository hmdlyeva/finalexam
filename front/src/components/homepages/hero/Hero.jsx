import "./hero.scss";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay , Navigation} from "swiper/modules";
const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5000}
        >
          <SwiperSlide>
            <div className="container">
              <div className="my">
                <div className="left">
                  <h1>Wood & Cloth Sofa</h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam exercitationem deleniti eos error? Suscipit nam
                    eaque esse rem excepturi laborum.
                  </p>

                  <button>BUY NOW</button>
                </div>

                <div className="right"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="my">
                <div className="left">
                  <h1>Wood & Cloth Sofa</h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam exercitationem deleniti eos error? Suscipit nam
                    eaque esse rem excepturi laborum.
                  </p>

                  <button>BUY NOW</button>
                </div>

                <div className="right"></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="my">
                <div className="left">
                  <h1>Wood & Cloth Sofa</h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam exercitationem deleniti eos error? Suscipit nam
                    eaque esse rem excepturi laborum.
                  </p>

                  <button>BUY NOW</button>
                </div>

                <div className="right"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
