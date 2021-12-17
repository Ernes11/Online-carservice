import React, { useState } from "react";
import {Button} from "../UI/Button";
import { Link } from "react-router-dom";
import { Info } from "../Components/Info";

function InfoSection({ buttonLabel }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {
        <div className="infosection">
          <div className="infosection__item">
            <div className="infosection__text">
              <h1 className="infosection__title">
                We follow a clear process to help you out.
               </h1>{" "}
               <h2 className="infosection__subtitle">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire
              </h2>
              <div className="infosection__btn">
             <Link to="/service">
              <Button buttonSize="btn--large" buttonColor="primary">
                {buttonLabel}
                Learn more</Button>
             </Link>
              </div>
             </div>
             <div className="info__part">
            <Info showInfo={showInfo} setShowInfo={setShowInfo} />
            </div>
          </div>
        </div>
      }
    </>
  );
}
export default InfoSection;
