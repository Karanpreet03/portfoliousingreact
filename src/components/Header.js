import React from "react";
import "../components/Header.css";
import Navbar from "./Navbar";
import Typed from "react-typed";
const Header = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="header-wrapper mt-5" id="home">
        <div className="main-info">
          <p className="display-5">
            Full Stack Website Development and Interactive Front-end Development
          </p>
          <Typed
            className="typed-text"
            strings={[
              "Front-End Development", "Back-End Development", "Full-stack Development",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
      </div>
    </>
  );
};
export default Header;
