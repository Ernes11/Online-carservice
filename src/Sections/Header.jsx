import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import Rate from "../Components/Rate";

 
function Header({
  lightBg,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  
}) {
  return (
    <>
      <div className={lightBg ? "home__header" : "home__header darkBg"}>
        <div className="container">
          <div
            className="row home__header-row"
            // style={{
            //   display: "flex",
            //   flexDirection: imgStart === "start" ? "row-reverse" : "row",
            // }}
          >
            <div className="col">
              <div className="home__header-text-wrapper">
                <div className="top-line">{topLine}</div>

                <Link to="/contact">
                  <Button buttonSize="btn--large" buttonColor="primary">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
              <div className="home__header-time">
                <img
                  src="img/Icon.svg"
                  alt={alt}
                  className="home__header-icon"
                />
                <div className="home__header-time-text">
                  <h1 className="headline">{headLine}</h1>
                  <p className="description">{description}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__header-img">
                <img src={img} alt={alt} className="home__header-img" />
              </div>
              <div className="quick-service-img">
                <img src="img/Circle.png" alt="cicle-img" />
                <p className="quick-service-desc">Quick service</p>
              </div>
              <div className="header__rate">
                <Rate/>
                <h3 className="header__rate-subtitle">
                  Rating
                </h3>
              </div>
            

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
