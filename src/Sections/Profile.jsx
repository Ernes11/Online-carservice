import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

function Profile({ buttonLabel }) {
  return (
    <>
      <div className="profile">
        <div className="profile__image">
          <img src="img/profile.png" alt="service" />
        </div>
        <div className="profile__text">
          <h1 className="profile__title">About us</h1>
          <p className="profile__descr">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does
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

export default Profile;
