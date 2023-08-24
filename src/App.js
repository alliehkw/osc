import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./components/home/Home.js";
import PatientEducation from "./components/patient-education/PatientEducation";
import OnsiteTherapy from "./components/onsite-therapy/OnsiteTherapy.js";
import { useQuery, gql } from "@apollo/client";

const footer_data = gql`
  {
    allFooter {
      nodes {
        oSCAddress
        oSCHours
        oSCLogo {
          altText
          mediaItemUrl
        }
        oSCPhoneNumber1
        oSCPhoneNumber2
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(footer_data);

  return (
    <>
      {!loading ? (
        <div className="App">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/education" element={<PatientEducation />} />
              <Route path="/onsite-therapy" element={<OnsiteTherapy />} />{" "}
            </Routes>{" "}
          </Router>
          <Footer data={data} />
        </div>
      ) : null}
    </>
  );
}

export default App;
