import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import DownCarrot from "./svgs/DownCarrot.js";
import WhiteLogo from "./svgs/WhiteLogo.svg";
import DarkLogo from "./svgs/DarkLogo.svg";

const nav_bar_data = gql`
  {
    allNavBar {
      nodes {
        oSCPhoneNumber
        oSCLogo {
          altText
          mediaItemUrl
        }
        oSCLogo2 {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;

function NavBar() {
  // TO DO: ask steve how he wants the buttons and stuff to transition on scroll

  const { loading, error, data } = useQuery(nav_bar_data);
  const [navbar, setNavbar] = useState(false);

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
      {!loading ? (
        <div
          className={navbar ? "navbar-container active" : "navbar-container"}
        >
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
              {/* <Link to="/about"> */}
              <div className="navbar-text-with-icon">
                <p className="allCaps">ABOUT</p>
                <DownCarrot svgColor={navbar ? "#008771" : "white"} />
              </div>
              {/* </Link> */}
            </li>
            <li>
              <Link to="/education">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">EDUCATION</p>
                  <DownCarrot svgColor={navbar ? "#008771" : "white"} />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/onsite-therapy">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">THERAPY</p>
                  <DownCarrot svgColor={navbar ? "#008771" : "white"} />
                </div>
              </Link>
            </li>
            {/* TO DO: make this lead somewhere */}
            <li>
              {/* <Link to="/resources"> */}
              <div className="navbar-text-with-icon">
                <p className="allCaps">RESOURCES</p>
                <DownCarrot svgColor={navbar ? "#008771" : "white"} />
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
                  REFER A PATIENT
                </button>
              </li>
              <li>
                <button id="navbutton" className="green">
                  REQUEST AN APPOINTMENT
                </button>
              </li>
            </div>
          </div>
          <Outlet />
        </div>
      ) : null}{" "}
    </>
  );
}

export default NavBar;
