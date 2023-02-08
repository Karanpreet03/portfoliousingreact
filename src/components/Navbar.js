import React from "react";
import logo from "../logo.png";
import "../components/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" id="navbar">
          <a className="navbar-brand">
            <img src={logo} id="logo" className="rounded mx-auto d-block" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="#home" className="link"><a className="nav-link" aria-current="page">
                  Home
                </a></Link>
              </li>
              <li className="nav-item">
                <Link to="#about_me" className="link"><a className="nav-link">
                  About me
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="#services" className="link"><a className="nav-link" aria-current="page">
                  Services
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="#work_exp" className="link"><a className="nav-link" aria-current="page">
                  Work experience
                </a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
