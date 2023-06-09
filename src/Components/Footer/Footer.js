import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <div className="signup-section">
        <h1 className="footer-header">Join us at the Well...</h1>
        <p>Enter your email address to receive loop with news and updates.</p>
        <motion.button className="signupBtn" whileHover={{ scale: 1.05 }}>
          Sign Up
        </motion.button>
      </div>
      <div className="address-section">
        <h2>ABURA LONDON</h2>
        <p>
          The Africa Centre
          <br /> 66 Great Suffolk Street
          <br /> LONDON
          <br /> SE1 0BL
        </p>
        <p>info@aburalondon.com</p>
      </div>
    </div>
  );
};

export default Footer;
