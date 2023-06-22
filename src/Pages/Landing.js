import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import logo from "../public/content/well-red.png";
import ghana from "../public/content/ghana.png";
import "./Landing.css";

const Landing = ({ setTitle, definition, abura }) => {
  setTitle("A DIASPORA LEGACY");
  const pathLocation = useLocation();
  return (
    <div className="landing-content">
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
      <div className="tagline-contents">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            abura && pathLocation.pathname === "/"
              ? { opacity: 100 }
              : { opacity: 0 }
          }
          className="modal abura"
        >
          <div className="modal-contents">
            <h1>
              abura | Twi{" "}
              <img
                src={ghana}
                className="ghana-img"
                alt="ghana-flag"
                width={32}
                height={32}
              ></img>
            </h1>
            <h2>noun</h2>
            <p>the local watering hole where the community comes together.</p>
          </div>
        </motion.div>
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
