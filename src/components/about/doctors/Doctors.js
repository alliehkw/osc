import "../../../styles/DoctorsStyles.css";
import Hero from "../../Reusables/Hero.js";
import AboutSection from "./AboutSection.js";
import Certifications from "./Certifications.js";
import PhysiciansAssistant from "./PhysiciansAssistant.js";

function Doctors({ data }) {
  return (
    <div className="doctors-container">
      <Hero
        tagline={data.allDoctorsPage.nodes[0].doctorsPageTagLine}
        pageTitle={"doctors"}
        hero_size={"short"}
      />
      <AboutSection
        hero_data={data.allDoctorsPage.nodes[0]}
        doctors_data={data.doctors.nodes}
      />
      <Certifications
        certification_data={data.allCertificationsPage.nodes[0]}
      />
      <PhysiciansAssistant PA_data={data.allPhysicianAssistant.nodes[0]} />
    </div>
  );
}

export default Doctors;
