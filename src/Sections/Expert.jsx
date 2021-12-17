import React, { useState } from "react";
import { Info } from "../Components/Info";

function Expert() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="expert">
        <div className="expert__left">
          <h1 className="expert__left-title">
            We Provide Expert Service and aim to have a long term with you
          </h1>
          <h3 className="expert__left-subtitle">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter
          </h3>
          <div className="info__part">
            <Info showInfo={showInfo} setShowInfo={setShowInfo} />
          </div>
        </div>
        <div className="expert__right">
            <img src="img/expert.png" alt="expertphoto" />
        </div>
      </div>
    </>
  );
}

export default Expert;
