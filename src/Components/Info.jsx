import React from "react";

export const Info = () => {
  return (
    <>
      {
        <div>
          <div className="info">
            <div className="info__box">
              <div className="info__images">
                <img className="info-img" src="img/step1.png" alt="service" />
                <div className="info-stepline">
                  <img src="img/stepline.png" alt="active-step" />
                </div>
              </div>

              <div className="info__text">
                <div className="info__text-subtitle">Get a Quote</div>
                <p className="info__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>

            <div className="info__box">
              <div className="info__images">
                <img src="img/step2.png" alt="service" />
                <div className="info-stepline">
                  <img src="img/stepline.png" alt="active-step" />
                </div>
              </div>
              <div className="info__text">
                <div className="info__text-subtitle">Book an Appointment</div>
                <p className="info__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>
            <div className="info__box">
                <div className="info__image-3">
                <img src="img/step3.png" alt="service" />
                </div>
            
              <div className="info__text">
                <div className="info__text-subtitle">Get your Service Done</div>
                <p className="info__text-desc">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Info;
