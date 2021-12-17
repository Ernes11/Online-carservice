import React from "react";
import Stat from '../Sections/Stat';

function CustomerValue() {
  return (
    <>
      <div className="customervalue">
        <h1 className="customervalue__title">
          Services we provide to our valued customers
        </h1>
        <div className="customervalue__items">
          <div className="customervalue__card">
            <img src="img/cs.png" alt="" />
            <h3 className="customervalue__subtitle">Convenient Service</h3>
            <p className="customervalue__descr">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div className="customervalue__card">
            <img src="img/em.png" alt="" />
            <h3 className="customervalue__subtitle">Convenient Service</h3>
            <p className="customervalue__descr">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div className="customervalue__card">
            <img src="img/usd.png" alt="" />
            <h3 className="customervalue__subtitle">Convenient Service</h3>
            <p className="customervalue__descr">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
        </div>
      </div>
      <Stat/>
    </>
  );
}

export default CustomerValue;
