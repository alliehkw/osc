import React, { useState } from "react";
import "../../styles/NavBarStyles.css";
import { Link, Outlet } from "react-router-dom";
import CompanyDropDown from "./CompanyDropDown.js";
import PatientEdDropDown from "./PatientEdDropDown.js";
import ResourcesDropDown from "./ResourcesDropDown.js";
import DownCarrot from "../svgs/DownCarrot.js";
import WhiteLogo from "../svgs/WhiteLogo.svg";
import DarkLogo from "../svgs/DarkLogo.svg";
import { useLocation } from "react-router-dom";

function NavBar() {
  // TO DO: ask steve how he wants the buttons and stuff to transition on scroll
  // TO DO: make it so navbar dropdowns cant overlap!
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [dropDown, setDropDown] = useState({
    about: false,
    education: false,
    resources: false,
  });

  const handleMouseEnter = (menuItem) => {
    setDropDown({ ...dropDown, [menuItem]: true });
  };

  const handleMouseLeave = (menuItem) => {
    setDropDown({ ...dropDown, [menuItem]: false });
  };

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      <div className={navbar ? "navbar-container active" : "navbar-container"}>
        {/* TO DO: figure out navbar mapping and add it in */}
        <div className="navbar-split">
          <ul>
            <Link to="/" end>
              {!navbar ? (
                <div className="logo-container">
                  <img src={WhiteLogo} alt="OSC Logo" />
                </div>
              ) : (
                <div className="logo-container active">
                  <div className="logo-container">
                    <img src={DarkLogo} alt="OSC Logo" />
                  </div>
                </div>
              )}
            </Link>
          </ul>
          <div className="logo-gap"></div>
          <div
            className="menu-drop-down"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <div className="navbar-text-with-icon">
              <p className="allCaps">company</p>
              <DownCarrot svgColor={navbar ? "#003028" : "white"} />
            </div>
            <CompanyDropDown isVisible={dropDown.about} />
          </div>
          <div
            className="menu-drop-down"
            onMouseEnter={() => handleMouseEnter("education")}
            onMouseLeave={() => handleMouseLeave("education")}
          >
            <div className="navbar-text-with-icon">
              <p className="allCaps">education</p>
              <DownCarrot svgColor={navbar ? "#003028" : "white"} />
            </div>
            <PatientEdDropDown isVisible={dropDown.education} />
          </div>
          <ul className="nav-item-sans-drop-down">
            <Link to="/onsite-therapy">
              <div className="navbar-text-with-icon">
                <p className="allCaps">therapy</p>
                {/* <DownCarrot svgColor={navbar ? "#003028" : "white"} /> */}
              </div>
            </Link>
          </ul>
          <div
            className="menu-drop-down"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={() => handleMouseLeave("resources")}
          >
            <div className="navbar-text-with-icon">
              <p className="allCaps">resources</p>
              <DownCarrot svgColor={navbar ? "#003028" : "white"} />
            </div>
            <ResourcesDropDown isVisible={dropDown.resources} />
          </div>
        </div>
        <div className="navbar-split">
          <div className="nav-buttons">
            <ul>
              <button
                id="navbutton"
                className={navbar ? "white" : "transparent"}
              >
                refer a patient
              </button>
            </ul>
            <ul>
              <button
                id="navbutton"
                className={
                  location.pathname === "/" || navbar ? "green" : "white"
                }
              >
                request an appointment
              </button>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
