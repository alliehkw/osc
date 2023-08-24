import { Link, Outlet } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import DownCarrot from "./svgs/DownCarrot.js";

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
                <DownCarrot />
              </div>
              {/* </Link> */}
            </li>
            <li>
              <Link to="/education">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">EDUCATION</p>
                  <DownCarrot />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/onsite-therapy">
                <div className="navbar-text-with-icon">
                  <p className="allCaps">THERAPY</p>
                  <DownCarrot />
                </div>
              </Link>
            </li>
            {/* TO DO: make this lead somewhere */}
            <li>
              {/* <Link to="/resources"> */}
              <div className="navbar-text-with-icon">
                <p className="allCaps">RESOURCES</p>
                <DownCarrot />
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
                <button id="navbutton" className="transparent">
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
