import React from "react";
import { Link } from "react-router-dom";


export const IconItems = ({showIcon, setShowIcon}) => {
  return (
    <>
      {
        <div>
          <div className="icon">
            <div className="icon__box">
              <img className="icon__image"src="img/conservice.png" alt="service" />
              <div className="icon__text">
                <div className="icon__text-subtitle">Convenient service</div>
                <p className="icon__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="icon__box">
              <img  src="img/mechanic.png" alt="service" />
              <div className="icon__text">
                <div className="icon__text-subtitle">Expert mechanics</div>
                <p className="icon__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="icon__box">
              <img src="img/transparentprice.png" alt="service" />
              <div className="icon__text">
                <div className="icon__text-subtitle">Transparent pricing</div>
                <p className="icon__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="icon__text-more">
              <h3 className="more-about">Know more about us</h3>
              <Link to="/aboutus"><img src="img/Arrow.svg" alt="arrow" /></Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default IconItems;
