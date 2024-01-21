import React from "react";
import "./wishlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { addtocart, addtowish } from "../../redux/slice/slice";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../../components/homepages/footer/Footer";
const Wishlist = () => {
  const products = useSelector((state) => state.products.wishlist);
  const dispatch = useDispatch();

  //   let findwish = products.find((q)=>q._id = p._id)

  return (
    <section id="wishlist">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="wishlist">
        <Navbar />
        <div className="container">
          <div className="my">
            <div className="cards">
              {products &&
                products.map((p) => (
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
                        {products.find((q) => q._id === p._id) ? (
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "red" }}
                            onClick={() => {
                              dispatch(addtowish(p));
                            }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faHeart}
                            onClick={() => {
                              dispatch(addtowish(p));
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Wishlist;
