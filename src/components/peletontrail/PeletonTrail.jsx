/**
 * Peleton Trail Component
 * 
 * A promotional section component that encourages users to try the Peloton App
 * with a free trial offer. This component serves as a call-to-action section
 * typically placed towards the end of the landing page.
 * 
 * Features:
 * - Prominent call-to-action for 30-day free trial
 * - Left-right layout with content and visual space
 * - Responsive design for different screen sizes
 * - Clear messaging about app benefits and trial terms
 * 
 * Content includes:
 * - App promotion title
 * - Free trial offer (30 days)
 * - Benefits description (home, gym, on-the-go usage)
 * - Call-to-action button
 * - Terms and conditions notice
 */

import React from "react";
import "./peletontrail.css";

const PeletonTrail = () => {
  return (
    <div className="peleton-trail">
      <div className="trail-content">
        {/* Left side: Promotional content and call-to-action */}
        <div className="trail-content-left">
          <div className="trail-content-text">
            {/* App branding */}
            <h2>Peloton App</h2>
            {/* Main offer headline */}
            <h1>Try free for 30 days</h1>
            {/* Benefits description */}
            <p>
              Take classes at home, in the gym, or on the go with no equipment
              needed.
            </p>
            {/* Primary call-to-action button */}
            <button>Try free for 30 days</button>
            {/* Legal disclaimer */}
            <h6>New paid memberships only. Terms apply.*</h6>
          </div>
        </div>
        {/* Right side: Visual space (likely for background image via CSS) */}
        <div className="trail-content-right"></div>
      </div>
    </div>
  );
};

export default PeletonTrail;
