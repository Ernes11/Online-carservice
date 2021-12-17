import React from "react";
import FeedbackSlider from "react-slick";

export default function SimpleFeedbackSlider() {
  var settings = {
    dots: true,
    infinite: true,
    Speed: 4000,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    
  };
  return (
    <div className="feedback__container">
      <h1 className="feedback__title">
        Our customers say the nicest things about our service
      </h1>
      <FeedbackSlider className="FeedbackSlider" {...settings}>
        <div className="feedback__content">
          <div className="feedback-top">
            <div className="feedback__image">
              <img src="img/review1.png" alt="" />
            </div>
            <div className="feedback__text">
              <h3 className="feedback-subtitle">Jonathan Vallem</h3>
              <h4 className="feedback__subtitle">New york</h4>
            </div>
          </div>
          <p className="feedback__decs">
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car in a short
            comprehensive look on all the working
          </p>
        </div>
        <div className="feedback__content">
          <div className="feedback-top">
            <div className="feedback__image">
              <img src="img/review1.png" alt="" />
            </div>
            <div className="feedback__text">
              <h3 className="feedback-subtitle">Jonathan Vallem</h3>
              <h4 className="feedback__subtitle">New york</h4>
            </div>
          </div>
          <p className="feedback__decs">
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car in a short
            comprehensive look on all the working
          </p>
        </div>
        <div className="feedback__content">
          <div className="feedback-top">
            <div className="feedback__image">
              <img src="img/review1.png" alt="" />
            </div>
            <div className="feedback__text">
              <h3 className="feedback-subtitle">Jonathan Vallem</h3>
              <h4 className="feedback__subtitle">New york</h4>
            </div>
          </div>
          <p className="feedback__decs">
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car in a short
            comprehensive look on all the working
          </p>
        </div>
      </FeedbackSlider>
    </div>
  );
}
