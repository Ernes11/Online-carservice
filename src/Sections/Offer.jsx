import React from "react";
import { Link } from "react-router-dom";


function Offer() {
  return (
    <>
      <div className="offer">
        <div className="container">
          <div className="offer__text">
            <h1 className="offer__title">What we Offer</h1>
            <h2 className="offer__subtitle">
              We offer full service auto repair & maintenance
            </h2>
          </div>
          <div className="offer__row-1">
            <Diagnostic />
            <Engine />
            <Batteries />
            <OilFilter />
          </div>
          <div className="offer__row-2">
            <Diagnostic />
            <Engine />
            <Batteries />
            <OilFilter />
          </div>
          <div className="offer__text-more">
            
            <h3 className="about-services">Learn about services</h3>
            <Link to="/aboutus"><img src="img/Arrow.svg" alt="arrow" /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

const Diagnostic = () => (
  <div className="diagnostic__box">
    <div className="diagnostic__image">
      <img src="img/diagnos.png" alt="" />
    </div>
    <h3 className="diagnostic__subtitle">Diagnostic</h3>
  </div>
);

const Engine = () => (
  <div className="engine__box">
    <div className="engine__image">
      <img src="img/enginerepair.svg" alt="" />
    </div>
    <h3 className="engine__subtitle">Engine Repair</h3>
  </div>
);

const Batteries = () => (
  <div className="batteries__box">
    <div className="batteries__image">
      <img src="img/battery.svg" alt="" />
    </div>
    <h3 className="batteries__subtitle">Batteries</h3>
  </div>
);
const OilFilter = () => (
  <div className="oilfilter__box">
    <div className="oilfilter__image">
      <img src="img/oilfilter.svg" alt="" />
    </div>
    <h3 className="oilfilter__subtitle">Oil Filter</h3>
  </div>
);

export default Offer;
