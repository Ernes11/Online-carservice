import React from "react";
import Footer from "../Components/Footer";

import AboutService from "../Sections/AboutService";
import AutoDiagnostics from "../Sections/AutoDiagnostics";
import GetInfo from "../Sections/GetInfo";
import Process from "../Sections/Process";
import ProcessStep from "../Sections/ProcessStep";

function Services() {
  return (
    <>
      <div className="service">
        <AboutService />
        <AutoDiagnostics />
        <Process />
        <ProcessStep />
        <GetInfo />
        <Footer />
      </div>
    </>
  );
}

export default Services;
