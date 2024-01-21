import React from "react";
import "./basket.scss";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, getData } from "../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { delcart, remvcart } from "../../redux/slice/slice";
import Navbar from "../../components/navbar/Navbar";
import {Helmet} from "react-helmet";
import Footer from "../../components/homepages/footer/Footer";
const Basket = () => {
  const products = useSelector((state) => state.products.basket);
  const dispatch = useDispatch();
  return (
    <section id="basket">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="basket">
        <Navbar />

        <div className="container">
          <div className="my">
            <div className="cards">
              {products &&
                products.map((p) => (
                  <div key={p._id} className="card">
                    <img src={p.image} alt="" width={230} height={230} />
                    <div className="detail">
                      <h2>{p.name}</h2>

                      <div className="right">
                        <p>${p.price*p.count}.00</p>

                        <button
                          onClick={() => {
                            dispatch(remvcart(p));
                          }}
                        >
                          -
                        </button>
                        <p>{p.count}</p>
                        <button
                          onClick={() => {
                            dispatch(addtocart(p));
                          }}
                        >
                          +
                        </button>
                        
                        <button
                          onClick={() => {
                            dispatch(delcart(p));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Basket;
