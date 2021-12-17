import React from "react";
import Footer from "../Components/Footer";
import GetInfo from "../Sections/GetInfo";
import Profile from "../Sections/Profile";
import Expert from "../Sections/Expert";
import Value from "../Sections/Value";
import CustomerValue from "../Sections/CustomerValue";
import Team from "../Sections/Team";


function AboutUs() {
  return (
    <>
      <div className="about">
        <Profile />
        <Expert />
        <Value />
        <CustomerValue/>
        <Team/>
        <GetInfo />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
