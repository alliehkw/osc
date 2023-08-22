import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      {/* TO DO: figure out navbar mapping and add it in */}
      <p>NavBar</p>
      <nav>
        <ul>
          <li>
            <Link to="/" end>
              **LOGO**
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
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
