import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

function AboutService({ buttonLabel }) {
  return (
    <>
      <div className="aboutservice">
        <div className="aboutservice__image">
          <img src="img/service.png" alt="service" />
        </div>
        <div className="aboutservice__text">
          <h1 className="aboutservice__title">Our services</h1>
          <p className="aboutservice__descr">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does{" "}
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

export default AboutService;
