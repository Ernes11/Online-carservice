import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

function ProcessStep({ buttonLabel }) {
  return (
    <>
      <div className="processStep">
        <div className="process__images">
          <img src="img/ps1.png" alt="" />
          <img src="img/ps2.png" alt="" />
        </div>
        <div className="processStep__text">
          <h1 className="processStep__title">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h1>
          <p className="processStep__descr">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>
          <Link to="/book-service">
            <Button buttonSize="btn--large" buttonColor="primary">
              {buttonLabel}
              Book a service
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProcessStep;
