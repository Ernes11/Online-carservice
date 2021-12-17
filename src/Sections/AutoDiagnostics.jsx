import React from "react";

function AutoDiagnostics() {
  return (
    <>
      <div className="autodiagnostics__col">
        <div className="auto__col-1">
          <div className="auto__card">
            <div className="auto__image">
              <img src="img/autod.png" alt="diagnostic" />
            </div>
            <div className="auto__text">
              <h1 className="auto__title">Auto Diagnostics</h1>
              <p className="auto__descr">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic. Through True Rich Attended does no end it his
                mother.
              </p>
              <div className="auto__text-more">
                <h3 className="auto__more-subtitle">See service details</h3>
                <img src="img/Arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="auto__col-2">
          <div className="auto__row-1">
              <div><Diagnostic /></div>
             <div> <Engine /></div>
           
          </div>
          <div className="auto__row-2">
             <div><Diagnostic /></div>
            <div> <Engine /></div>
          </div>
          <div className="auto__row-3">
             <div><Diagnostic /></div>
            <div> <Engine /></div>
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

export default AutoDiagnostics;
