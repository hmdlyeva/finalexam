import React, { useEffect, useState } from "react";
import "./menu.scss";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, addtowish, getData } from "../../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
const Menu = () => {
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.products.wishlist);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const navigate = useNavigate();

  const [sortcritearia, setsortcritearia] = useState("");

  const handlesort = (value) => {
    setsortcritearia(value);
  };

  const getrsort = () => {
    switch (sortcritearia) {
      case "a":
        return [...products].sort((p, q) => p.name.localeCompare(q.name));

      case "z":
        return [...products].sort((p, q) => q.name.localeCompare(p.name));

      case "price":
        return [...products].sort((p, q) => p.price - q.price);
      default:
        return products;
    }
  };
  const sort = getrsort();

  return (
    <section id="menu">
      <div className="menu">
        <div className="container">
          <div className="my">
            <div className="upper">
              <div className="left">
                <h1>Awesome</h1>
                <p>Shop</p>
              </div>
              <div className="right">
                <select
                  name=""
                  id=""
                  value={sortcritearia}
                  onChange={(e) => {
                    handlesort(e.target.value);
                  }}
                >
                  <option value="a">A-Z</option>
                  <option value="z">Z-A</option>
                  <option value="price">Price</option>
                </select>
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
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                speed={9000}
              >
                {sort
                  ? sort.map((p) => (
                      <SwiperSlide>
                        <div
                          className="card"
                          onClick={() => {
                            navigate(`/detail/${p._id}`);
                          }}
                        >
                          <img src={p.image} alt="" width={230} height={230} />

                          <div className="detail">
                            <h2>{p.name}</h2>

                            <div className="right">
                              <p>${p.price}.00</p>
                              <div className="df">
                                <FontAwesomeIcon
                                  icon={faBasketShopping}
                                  style={{ color: "#ff9500", fontSize: "20" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    dispatch(addtocart(p));
                                    alert("added to cart");
                                  }}
                                />

                                {wishlist.find((q) => q._id === p._id) ? (
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ fontSize: "20", color: "red" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      dispatch(addtowish(p));
                                      alert("wish");
                                    }}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ fontSize: "20" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      dispatch(addtowish(p));
                                      alert("wish");
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : products.map((p) => (
                      <SwiperSlide>
                        <div
                          key={p._id}
                          className="card"
                          onClick={() => {
                            navigate(`/detail/${p._id}`);
                          }}
                        >
                          <img src={p.image} alt="" width={230} height={230} />

                          <div className="detail">
                            <h2>{p.name}</h2>

                            <div className="right">
                              <p>${p.price}.00</p>
                              <div className="df">
                                <FontAwesomeIcon
                                  icon={faBasketShopping}
                                  style={{ color: "#ff9500", fontSize: "20" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    dispatch(addtocart(p));
                                    alert("added to cart");
                                  }}
                                />

                                {wishlist.find((q) => q._id === p._id) ? (
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ fontSize: "20", color: "red" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      dispatch(addtowish(p));
                                      alert("wish");
                                    }}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ fontSize: "20" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      dispatch(addtowish(p));
                                      alert("wish");
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
