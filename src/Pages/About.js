import React from "react";

import "./About.css";

const About = ({ setTitle }) => {
  //   useEffect(() => {
  //     setTitle("ABOUT");
  //   }, [setTitle]);
  setTitle("ABOUT");

  return (
    <div className="about-page">
      <div className="text-container">
        <p className="about-text">
          Abura is an African cocktail and art bar where the vibrant tapestry of
          the black African diaspora comes to life. At its core, Abura is a
          testament to their cultural impact and ever evolving story.
        </p>
        <p className="about-text">
          In Twi, 'Abura' means 'drinking well', and our vision is to be a place
          where the community comes together, to quench their souls for
          connection. We fuse premium African beverages with recipe blends
          cherished by the diaspora, and marvel at the captivating artwork
          produced by diaspora talent.
        </p>
        <p className="about-text">
          Abura is more than a bar; it is a sanctuary for the diaspora community
          and an invitation to all to immerse themselves in the beauty of their
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
