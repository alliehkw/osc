import { Link } from "react-router-dom";

function AboutDropDown({ isVisible }) {
  // TO DO: hook up all links, remove italics
  return (
    <div className={isVisible ? "dropdown-menu" : "dropdown-menu hidden"}>
      <ul>
        <li>
          {/* <Link to="/what-we-do"> */}
          <p className="allCaps">what we do</p>
          {/* </Link> */}
        </li>
        <li>
          <Link to="/doctors">
            <p className="allCaps">
              <i>doctors</i>
            </p>
          </Link>
        </li>
        <li>
          {/* <Link to="/insurance-and-billing"> */}
          <p className="allCaps">insurance and billing</p>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default AboutDropDown;
