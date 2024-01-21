import React, { useEffect } from "react";
import "./detail.scss";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, getData } from "../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
const Detail = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  let { id } = useParams();

  let p = products.find((p) => p._id === id);

  return (
    <section id="detail">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="detail">
        <Navbar />
        <div className="container">
          <div className="my">


          {p && (
            <div className="card">
              <img src={p.image} alt="" width={230} height={230} />

              <div className="detail">
                <h2>{p.name}</h2>

                <div className="right">
                  <p>${p.price}.00</p>
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    style={{ color: "#ff9500", fontSize: "20" }}
                    onClick={() => {
                      dispatch(addtocart(p));
                      alert("added to cart");
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
