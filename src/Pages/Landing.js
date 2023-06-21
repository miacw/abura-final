import React from "react";
import { motion } from "framer-motion";

import logo from "../public/content/well-red.png";
import "./Landing.css";

const Landing = ({ setTitle, definition }) => {
  setTitle("A DIASPORA LEGACY");
  return (
    <div className="landing-content">
      <div className="tagline-contents">
        <div className="center-illustration">
          <img
            src={logo}
            alt="well-logo-red.png"
            className="landing-well"
          ></img>
          <p className="tagline">
            A new cocktail and art bar celebrating the talents of the African
            diaspora.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={definition ? { opacity: 100 } : { opacity: 0 }}
          className="modal"
        >
          <div className="modal-contents">
            <h1>diaspora</h1>
            <h2>noun</h2>
            <p>
              the dispersion or spread of a people from their original homeland.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
