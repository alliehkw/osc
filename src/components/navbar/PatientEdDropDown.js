import { Link } from "react-router-dom";

function PatientEdDropDown({ isVisible }) {
  // TO DO: hook up all links, remove italics
  return (
    <div className={isVisible ? "dropdown-menu" : "dropdown-menu hidden"}>
      <ul>
        <li>
          {/* <Link to="/hip"> */}
          <p className="allCaps">hip</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/knee"> */}
          <p className="allCaps">knee</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/shoulder"> */}
          <p className="allCaps">shoulder</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/pre-op-preparation"> */}
          <p className="allCaps">pre-op preparation</p>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/post-op-recovery"> */}
          <p className="allCaps">post-op recovery</p>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default PatientEdDropDown;
