import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

function GetInfo({ buttonLabel }) {
  return (
    <>
      <div className="getinfo">
        <div className="getinfo__image">
          <img src="img/getcar.png" alt="" />
          <img src="img/getintouch.png" alt="" />
        </div>
        <div className="getinfo__text">
          <h1 className="getinfo__title">
            Get in touch with us for your service related query
          </h1>
          <Link to="/contact">
            <Button className="getinfo__btn" buttonSize="btn--large" buttonColor="dark">
              {buttonLabel}
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GetInfo;
