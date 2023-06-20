import React from "react";
import well from "../public/content/well-red.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = ({ setTitle }) => {
  setTitle("CONTACT");
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h1 className="logo-header">ABURA LONDON</h1>
        <p>
          The Africa Centre
          <br /> 66 Great Suffolk Street
          <br /> LONDON
          <br /> SE1 0BL
        </p>
        <h3>For enquiries:</h3>
        <p>info@aburalondon.com</p>
        <h3>Join the community:</h3>
        <div className="social-icons">
          <ul>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.instagram.com/aburalondon/">
                <BsInstagram className="social-icon" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://twitter.com/aburalondon?s=20">
                <BsTwitter className="social-icon" />
              </a>
            </motion.li>
          </ul>
        </div>
        <p>@aburalondon</p>
      </div>
      <div className="page-illustration">
        <img src={well} alt="well-illustration" className="wellImg"></img>
      </div>
    </div>
  );
};

export default Contact;
