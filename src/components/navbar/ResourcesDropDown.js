import { Link } from "react-router-dom";

function ResourcesDropDown({ isVisible }) {
  // TO DO: hook up all links, remove italics
  return (
    <div className={isVisible ? "dropdown-menu" : "dropdown-menu hidden"}>
      <ul>
        <li>
          {/* <Link to="/our-research"> */}
          <p className="allCaps">our research</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/dr-david-f-scott-publications"> */}
          <p className="allCaps">dr. david f. scott publications</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/blog"> */}
          <p className="allCaps">blog</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/patient-forms"> */}
          <p className="allCaps">patient forms</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/helpful-links"> */}
          <p className="allCaps">helpful links</p>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default ResourcesDropDown;
