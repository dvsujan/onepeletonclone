import React from "react";
import "./peletontrail.css";

const PeletonTrail = () => {
  return (
    <div className="peleton-trail">
      <div className="trail-content">
        <div className="trail-content-left">
          <div className="trail-content-text">
            <h2>Peloton App</h2>
            <h1>Try free for 30 days</h1>
            <p>
              Take classes at home, in the gym, or on the go with no equipment
              needed.
            </p>
            <button>Try free for 30 days</button>
            <h6>New paid memberships only. Terms apply.*</h6>
          </div>
        </div>
        <div className="trail-content-right"></div>
      </div>
    </div>
  );
};

export default PeletonTrail;
