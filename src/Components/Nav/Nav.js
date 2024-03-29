import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Nav = ({ title, toggleDefinition, toggleAbura }) => {
  const [burger_class, setBurgerClass] = useState("burger-bar closed");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [underline, setUnderline] = useState(false);
  const [logoUnderline, setLogoUnderline] = useState(false);

  const pathLocation = useLocation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 5000);
  // }, [underline]);

  const ItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const MenuVariants = {
    open: {
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: { type: "spring", bounce: 0, duration: 0.7 },
    },
  };

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
      setBurgerClass("open");
    } else {
      setMenuClass("menu hidden");
      setBurgerClass("closed");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="nav">
        <Link
          to="/"
          onClick={isMenuClicked ? updateMenu : null}
          className="home-link"
        >
          <motion.div
            className={logoUnderline ? "logo underlined-logo" : "logo"}
            onClick={() => {
              if (pathLocation.pathname === "/") {
                toggleAbura();
              }
            }}
            whileHover={() => {
              setLogoUnderline(true);
            }}
            onHoverEnd={() => {
              setLogoUnderline(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 207.3 50.1"
              className="logo-base"
            >
              <path d="m0,50.1h6.4l1.7-5.7c.2-.5.9-2.5,3.4-2.5h15.6c2.4,0,3.2,2,3.3,2.5l1.8,5.7h6.7L24.3.1h-10.1L0,50.1Zm11.2-17l7.1-26.2c.1-.5.3-.9.8-.9s.8.4.9.9l7.3,26.2c.2.8.4,3.3-2.6,3.3h-10.9c-3,.1-2.8-2.5-2.6-3.3Zm33,17h16c11.7,0,19.3-6.3,19.3-17.4,0-6.5-2.8-11.2-7.9-13.8,4.6-1.4,6.1-5.6,6.1-9.1,0-5.9-4.1-9.8-11.1-9.8h-22.4v50.1h0Zm6.4-7.9v-18.7c0-1.8,1.2-3.1,3-3.1h5.7c8.4,0,13.8,4.6,13.8,12.1s-5.4,12.2-13.8,12.2h-5.9c-1.7,0-2.8-1-2.8-2.5Zm0-29.6v-4.6c0-1.5,1.1-2.5,2.8-2.5h12.4c3.4,0,5.5,1.9,5.5,4.8s-2,4.8-5.5,4.8h-12.4c-1.7,0-2.8-1-2.8-2.5Zm77.8,37.5h6.3v-27.7c0-.8.2-1.9,1.6-1.9,1.2,0,1.7,1.1,2.1,1.6l18.2,28h7.3l-17.8-27.2c-.3-.4-.5-.8-.5-1.2,0-.7.5-1.3,1.7-1.3h6.9c6.3,0,10.6-4.2,10.6-10.2S160.5.1,154.2.1h-25.9l.1,50h0Zm6.3-37.9v-4.1c0-1.9,1.2-2.7,3.1-2.7h15.2c3.4,0,5.5,1.8,5.5,4.8s-2.1,4.8-5.5,4.8h-15.2c-1.9.1-3.1-.7-3.1-2.8Zm33.6,37.9h6.5l1.7-5.7c.2-.5.9-2.5,3.4-2.5h15.6c2.4,0,3.2,2,3.3,2.5l1.8,5.7h6.7L192.6.1h-10.1l-14.2,50Zm11.2-17l7.1-26.2c.1-.5.3-.9.9-.9.5,0,.8.4.9.9l7.2,26.2c.2.8.4,3.3-2.6,3.3h-11c-2.9.1-2.7-2.5-2.5-3.3Zm-60.5,17h-35.1v-6.2h35.1v6.2Z" />
            </svg>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35.2 39.5"
              className="logo-U"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: -66,
                transition: { type: "bounce", duration: 1, delay: 0.5 },
              }}
            >
              <path d="m17.6,39.5c10.5,0,17.6-7,17.6-17.6V0h-6.4v22c0,7.2-4.5,11.9-11.2,11.9s-11.2-4.8-11.2-11.9V0H0v21.9c0,10.6,7.1,17.6,17.6,17.6Z" />
            </motion.svg>
          </motion.div>
          <div
            className={
              logoUnderline && pathLocation.pathname === "/"
                ? "underline-span"
                : "hide"
            }
          ></div>
        </Link>

        <motion.h2 className="subheader">
          {title === "A DIASPORA LEGACY" ? (
            <div className="landing-title">
              <p>A</p>
              <motion.p
                whileHover={() => {
                  setUnderline(true);
                }}
                onHoverEnd={() => {
                  setUnderline(false);
                }}
                className={underline ? "underlined" : "p"}
                onClick={toggleDefinition}
              >
                DIASPORA
              </motion.p>
              <p>LEGACY</p>
            </div>
          ) : (
            title
          )}
          {/* <span className="reveal">Click me</span> */}
        </motion.h2>

        <div className="socials" id="nav-header-socials">
          <ul className="socials-list">
            <motion.li
              whileHover={{ scale: 1.1, transition: { type: "ease" } }}
            >
              <a href="https://www.instagram.com/aburalondon/">
                <BsInstagram className="social-icon" />
              </a>
            </motion.li>
            {/* <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://twitter.com/aburalondon?s=20">
                <BsTwitter className="social-icon" />
              </a>
            </motion.li> */}
          </ul>
        </div>
        {/* 
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div> */}
        <div id="nav-icon3" className={burger_class} onClick={updateMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <motion.div
          className={menu_class}
          animate={isMenuClicked ? "open" : "closed"}
          variants={{
            open: { clipPath: "inset(0% 0% 0% 0% round 4px)" },
            closed: { clipPath: "inset(10% 50% 90% 50% round 4px)" },
          }}
        >
          <motion.ul
            className="menu-list"
            initial={false}
            animate={isMenuClicked ? "open" : "closed"}
            variants={MenuVariants}
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              variants={ItemVariants}
              onClick={updateMenu}
            >
              <Link className="menu-link" to="/about">
                About
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              variants={ItemVariants}
              onClick={updateMenu}
            >
              <Link className="menu-link" to="/contact">
                Contact
              </Link>
            </motion.li>
            <motion.li variants={ItemVariants} onClick={updateMenu}>
              <div className="socials">
                <ul className="socials-list">
                  <motion.li
                    whileHover={{ scale: 1.1, transition: { type: "ease" } }}
                  >
                    <a href="https://www.instagram.com/aburalondon/">
                      <BsInstagram className="social-icon" />
                    </a>
                  </motion.li>
                  {/* <motion.li whileHover={{ scale: 1.1 }}>
                    <a href="https://twitter.com/aburalondon?s=20">
                      <BsTwitter className="social-icon" />
                    </a>
                  </motion.li> */}
                </ul>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
};

export default Nav;
