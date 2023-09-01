import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DownCarrot from "./svgs/DownCarrot.js";
import WhiteLogo from "./svgs/WhiteLogo.svg";
import DarkLogo from "./svgs/DarkLogo.svg";
import { useLocation } from "react-router-dom";

function NavBar() {
  // TO DO: ask steve how he wants the buttons and stuff to transition on scroll
  // TO DO: make the page scroll up to the to when you navigate between pages

  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // const requestButtonStyles =
  window.addEventListener("scroll", changeNavbar);
  console.log(location.pathname);
  return (
    <>
      <div className={navbar ? "navbar-container active" : "navbar-container"}>
        {/* TO DO: figure out navbar mapping and add it in */}
        <div className="navbar-split">
          <li>
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
          </li>
          <div className="logo-gap"></div>
          {/* TO DO: make this lead somewhere */}
          <li>
            <Link to="/doctors">
              <div className="navbar-text-with-icon">
                <p className="allCaps">ABOUT</p>
                <DownCarrot svgColor={navbar ? "#003028" : "white"} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/education">
              <div className="navbar-text-with-icon">
                <p className="allCaps">EDUCATION</p>
                <DownCarrot svgColor={navbar ? "#003028" : "white"} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/onsite-therapy">
              <div className="navbar-text-with-icon">
                <p className="allCaps">therapy</p>
                <DownCarrot svgColor={navbar ? "#003028" : "white"} />
              </div>
            </Link>
          </li>
          {/* TO DO: make this lead somewhere */}
          <li>
            {/* <Link to="/resources"> */}
            <div className="navbar-text-with-icon">
              <p className="allCaps">resources</p>
              <DownCarrot svgColor={navbar ? "#003028" : "white"} />
            </div>
            {/* </Link> */}
          </li>
        </div>
        <div className="navbar-split">
          {/* QUSETION: no phone number in nav? */}
          {/* <li>
              <div className="navbar-text-with-icon">
                <FaPhoneVolume class="icon-phone" />
                <p className="allCaps">
                  {data.allNavBar.nodes[0].oSCPhoneNumber}
                </p>
              </div>
            </li> */}
          <div className="nav-buttons">
            <li>
              <button
                id="navbutton"
                className={navbar ? "white" : "transparent"}
              >
                refer a patient
              </button>
            </li>
            <li>
              <button
                id="navbutton"
                className={
                  location.pathname === "/" || navbar ? "green" : "white"
                }
              >
                request an appointment
              </button>
            </li>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
