import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./components/home/Home.js";
import PatientEducation from "./components/patient-education/PatientEducation";
import OnsiteTherapy from "./components/onsite-therapy/OnsiteTherapy.js";
import { useQuery, gql } from "@apollo/client";

const get_data = gql`
  {
    projects {
      nodes {
        name
        assignee
        dueDate
        description
        slug
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(get_data);
  useEffect(() => {
    console.log(loading, error, data);
  });

  return (
    <div className="App">
      {data
        ? data.projects.nodes.map((project) => {
            return <p>{project.name}</p>;
          })
        : null}
      {/* // <Router>
      //   <NavBar />
      //   <Routes>
      //     <Route exact path="/" element={<Home />} />
      //     <Route path="/education" element={<PatientEducation />} />
      //     <Route path="/onsite-therapy" element={<OnsiteTherapy />} />
      //   </Routes>
      // </Router>
      // <Footer /> */}
    </div>
  );
}

export default App;
