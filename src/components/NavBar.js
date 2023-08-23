import { Link, Outlet } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";

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
          <li>
            <Link to="/" end>
              <img
                src={`${data.allNavBar.nodes[0].oSCLogo.mediaItemUrl}`}
                alt={`${data.allNavBar.nodes[0].oSCLogo.altText}`}
                // TO DO: move styling out of inline
                style={{ height: "50px" }}
              />
            </Link>
          </li>
          {/* TO DO: what do you want the ABOUT li to link to? */}
          <li>
            <Link to="/education">EDUCATION</Link>
          </li>
          <li>
            <Link to="/onsite-therapy">THERAPY</Link>
          </li>
          {/* <li>
            <Link to="/resources">RESOURCES</Link>
          </li> */}
          {/* TO DO: make this clickable */}
          <li>
            <p>{data.allNavBar.nodes[0].oSCPhoneNumber}</p>
          </li>
          <Outlet />
        </div>
      ) : null}{" "}
    </>
  );
}

export default NavBar;
