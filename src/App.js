import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/home/Home.js";
import PatientEducation from "./components/patient-education/PatientEducation";
import OnsiteTherapy from "./components/onsite-therapy/OnsiteTherapy.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/education" element={<PatientEducation />} />
          <Route path="/onsite-therapy" element={<OnsiteTherapy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
