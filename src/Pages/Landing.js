import React from "react";

import logo from "../public/content/well-red.png";
import "./Landing.css";

const Landing = ({ setTitle }) => {
  setTitle("A DIASPORA LEGACY");
  return (
    <div className="landing-content">
      <div className="tagline-contents">
        <img src={logo} alt="well-logo-red.png" className="landing-well"></img>
        <p className="tagline">
          A new cocktail and art bar celebrating the talents of the African
          diaspora.
        </p>
      </div>
    </div>
  );
};

export default Landing;
