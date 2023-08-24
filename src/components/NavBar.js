import { Link, Outlet } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const nav_bar_data = gql`
  {
    allNavBar {
      nodes {
        oSCPhoneNumber
        oSCLogo {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;

function NavBar() {
  const { loading, error, data } = useQuery(nav_bar_data);
  console.log(data);
  return (
    <>
      {!loading ? (
        <div className="navbar-container">
          {/* TO DO: figure out navbar mapping and add it in */}
          <div className="navbar-split">
            <li>
              <Link to="/" end>
                <div className="logo-container">
                  <img
                    src={`${data.allNavBar.nodes[0].oSCLogo.mediaItemUrl}`}
                    alt={`${data.allNavBar.nodes[0].oSCLogo.altText}`}
                    // TO DO: move styling out of inline?
                    style={{ height: "31.81px" }}
                  />
                </div>
              </Link>
            </li>
            {/* TO DO: make this lead somewhere */}
            <li>
              {/* <Link to="/about"> */}
              <div className="navbar-text-with-icon">
                <p className="allCaps">ABOUT</p>
                <FaAngleDown class="icon-angle-down" />
              </div>
              {/* </Link> */}
            </li>
            <li>
              <Link to="/education">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">EDUCATION</p>
                  <FaAngleDown class="icon-angle-down" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/onsite-therapy">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">THERAPY</p>
                  <FaAngleDown class="icon-angle-down" />
                </div>
              </Link>
            </li>
            {/* TO DO: make this lead somewhere */}
            <li>
              {/* <Link to="/resources"> */}
              <div className="navbar-text-with-icon">
                <p className="allCaps">RESOURCES</p>
                <FaAngleDown class="icon-angle-down" />
              </div>
              {/* </Link> */}
            </li>
          </div>
          <div className="navbar-split">
            <li>
              <div className="navbar-text-with-icon">
                <FaPhoneVolume class="icon-phone" />
                <p className="allCaps">
                  {data.allNavBar.nodes[0].oSCPhoneNumber}
                </p>
              </div>
            </li>
            <li>
              <button className="transparent">REFER A PATIENT</button>
            </li>
            <li>
              <button className="green">REQUEST AN APPOINTMENT</button>
            </li>
          </div>
          <Outlet />
        </div>
      ) : null}{" "}
    </>
  );
}

export default NavBar;
