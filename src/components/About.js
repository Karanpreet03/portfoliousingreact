import React from "react";
import "../components/About.css";
import image from "../My-photo.jpg";
const About = () => {
  return (
    <>
      <div id="about_me">
        <div className="container-fluid text-light" id="container-div">
          <div className="content-section">
            <div className="title">
              <p className="display-4 text-center">Karanpreet Sachdeva</p>
              <p className="display-6 text-center">Full-Stack Developer</p>
              <div className="text-center">
                <img src={image} alt="My image" />
              </div>
              <div className="text-center">
                <p id="body-para">
                  I am a full stack software developer. I know many front-end
                  programming languages, which includes C, C++, HTML5, CSS,
                  React Javascript, Core java. In back-end languages I know
                  PL/SQL.
                </p>
              </div>
              <div className="text-center mt-1">
                <a href="#contact" className="btn-main-offer">
                  <span>contact me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
