import React, { useState } from "react";
import ContactUs from "../UI/ContactUs";
import { IconItems } from "../Components/IconItems";

function GetQuote() {
  const [showIcon, setShowIcon] = useState(false);
  const [showContact] = useState(false);

  return (
    <>
      {
        <div className="getquote">
          <div className="getquote__item">
            <h1 className="quote__title">
              We are taking car servicing seriously
            </h1>{" "}
            {/* <Button onClick={openIcon}>Hello</Button> */}
            <IconItems showIcon={showIcon} setShowIcon={setShowIcon} />
          </div>
          <ContactUs className={showContact} />
        </div>
      }
    </>
  );
}

export default GetQuote;
