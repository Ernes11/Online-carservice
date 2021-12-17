import emailjs from "emailjs-com";
import React, {useState} from "react";
import {Button} from '../UI/Button';
import {Popup} from './Popup';

export default function ContactUs() {
  const [popupStatus, setPopupStatus] = useState(false)
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6qt7hb",
        "template_9kja4pi",
        e.target,
        "user_YAwLf2AIxGxqM6Mcg529J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setPopupStatus(true)
  }

  return (
    <div>
      {popupStatus && <Popup text="This is just a quick note to let you know we've received your message, and will respond as soon as we can... " title="THANK YOU" actionClose={setPopupStatus} />}
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="contact__form">
            <div className="contact__name">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="contact__mail">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="contact__phone">
              <input
                type="phone"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
            </div>
            <div className="contact__subject">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="contact__message">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="contact__btn">
              <Button buttonSize="btn--large" buttonColor="primary" value="Get your quote">
                Get your quote
              </Button>
              {/* <input type="submit" className="btn btn-info" value="Get your quote"></input> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
