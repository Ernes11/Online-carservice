import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer-col">
            <div className="col-left">
              <h1 className="footer-title">
                Get in touch with us for your service
              </h1>
              <div className="footer-items">
                <img
                  src="img/facebooklogo.svg"
                  alt=""
                  className="footer-item"
                />
                <img src="img/instagram.svg" alt="" className="footer-item" />
                <img src="img/twitter.svg" alt="" className="footer-item" />
                <img src="img/Linkedin.svg" alt="" className="footer-item" />
              </div>
            </div>
            <div className="col-right">
              <div className="col-right-1">
                <div className="footer-subtitle">Help line Number</div>
                <div className="footer-descr">1800 265 24 52</div>
              </div>
              <div className="col-right-1">
                {" "}
                <div className="footer-subtitle">Address</div>
                <div className="footer-descr">
                  NH 234 Public Square San Francisco 65368
                </div>
              </div>
              <div className="col-right-1">
                {" "}
                <div className="footer-subtitle">We are open</div>
                <div className="footer-descr">
                  Monday to Friday 9:00 AM to  10:00  AM
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-logo">
              <img src="img/Logo.png" alt="" />
            </div>

            <div className="footer-items">
              <div className="footer-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
              </div>
            </div>
            <div className="footer-copyright">@ Copyright Finsweet 2021</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
