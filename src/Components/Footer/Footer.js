import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  function triggerForm() {
    console.log("clicked");
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "W3xmN6"]);
  }
  return (
    <div className="footer">
      <div className="signup-section">
        <h1 className="footer-header">Join us at the Well...</h1>
        <p>
          Enter your email for the latest Abura news, and early access to our
          launch!
        </p>
        <motion.button
          className="signupBtn "
          whileHover={{ scale: 1.05 }}
          onClick={triggerForm}
        >
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
