import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./foot.scss";
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="my">
            <div className="upper">
              <div className="img1"></div>
              <div className="img2"></div>
              <div className="img3"></div>
              <div className="img4"></div>
              <div className="img5"></div>
          
         
              <div className="img1"></div>
              <div className="img2"></div>
              <div className="img3"></div>
              <div className="img4"></div>
              <div className="img5"></div>
              </div>

            <div className="main">
              <div className="first">
                <h1>Top Products</h1>
                <p>
                  Managed Website Manage Reputation Power Tools Marketing
                  Service
                </p>
                <p></p>
              </div>
              <div className="second">
                <h1>Quick Links</h1>
                <p>Jobs Brand Assets Investor Relations Terms of Service</p>
              </div>
              <div className="three">
                <h1>Features</h1>
                <p>Jobs Brand Assets Investor Relations Terms of Service</p>
              </div>
              <div className="four">
                <h1>Resources</h1>
                <p>Guides Research Experts Agencies</p>
              </div>
              <div className="five">
                <h1>Newsletter</h1>
                <p>
                  Heaven fruitful doesn't over lesser in days. Appear creeping
                </p>

                <div className="inputs_side">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <button>subscribe</button>
                </div>
              </div>
            </div>

            <div className="last">
              <div className="left">
                Copyright ©2024 All rights reserved | This template is made with
                by <span>Colorlib</span>
              </div>
              <div className="right">
                <div className="button">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#7d7d7d" }}
                  />
                </div>
                <div className="button">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#636363" }}
                  />
                </div>
                <div className="button">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "#5c5c5c" }}
                  />
                </div>
                <div className="button">Be</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
