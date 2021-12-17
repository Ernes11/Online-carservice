import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="left">
            <Link to="/" className="navbar__logo">
              <img className="img-logo" src="img/Logo@2x.svg" alt="logo" />
            </Link>
          </div>
          <div className="right">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
            </ul>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
            </ul>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <img src="img/AssistanceIcon.png" alt="assist" />
            <div className="assist__text">
              <p className="assist__descr">Road Assistance</p>
              <a href="tel:18002652452" className="assist__num">1800 265 24 52</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
