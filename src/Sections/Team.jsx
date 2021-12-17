import React from "react";

function Team() {
  return (
    <>
      <div className="team">
        <h1 className="team__title">Meet our Team</h1>
        <div className="team__items">
          <div className="team__card">
            <img src="img/jevana.png" alt="" />
            <h3 className="team__subtitle">Javena Melo</h3>
            <p className="team__descr">Founder, Director</p>
          </div>
          <div className="team__card">
            <img src="img/paul.png" alt="" />
            <h3 className="team__subtitle">Paul Honson</h3>
            <p className="team__descr">Head Technician</p>
          </div>
          <div className="team__card">
            <img src="img/davon.png" alt="" />
            <h3 className="team__subtitle">Devon Lane</h3>
            <p className="team__descr">Technician</p>
          </div>
        </div>
        <div className="team__items">
          <div className="team__card">
            <img src="img/jalen.png" alt="" />
            <h3 className="team__subtitle">Jalen Davies</h3>
            <p className="team__descr">Marketing Manager</p>
          </div>
          <div className="team__card">
            <img src="img/danford.png" alt="" />
            <h3 className="team__subtitle">Kylee Danford</h3>
            <p className="team__descr">Sales Manager</p>
          </div>
          <div className="team__card">
            <img src="img/wilson.png" alt="" />
            <h3 className="team__subtitle">Luisa Wilson</h3>
            <p className="team__descr">Support Assistant</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
