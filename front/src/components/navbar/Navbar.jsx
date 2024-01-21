import React from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, addtowish, getData } from "../../redux/slice/slice";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const basket = useSelector((state) => state.products.basket);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <section id="navbar">
      <div className="navbar">
        <div className="container">
          <div className="my">
            <div className="left2">
              <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="left">
              <h1>Aranoz</h1>
              <div className="box"></div>
            </div>
            <div className="mid">
              <ul>
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Shop
                </li>
                <li
                  onClick={() => {
                    navigate("/pages");
                  }}
                >
                  Pages
                </li>
                <li
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Blog
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </li>
                <li
                  onClick={() => {
                    navigate("/add");
                  }}
                >
                  Add
                </li>
                <li
                  onClick={() => {
                    navigate("/basket");
                  }}
                >
                  Cart
                </li>
              </ul>
            </div>
            <div className="right">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => {
                  navigate("/add");
                }}
              />

              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => {
                  navigate("/wish");
                }}
              />

              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={() => {
                  navigate("/basket");
                }}
              />
              <p>{basket.length}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
