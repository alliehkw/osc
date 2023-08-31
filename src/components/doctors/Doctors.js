import Hero from "./Hero.js";
import AboutSection from "./AboutSection";
import Certifications from "./Certifications.js";
import PhysiciansAssistant from "./PhysiciansAssistant.js";

function Doctors({ data }) {
  return (
    <div className="doctors-container">
      <Hero hero_data={data.allDoctorsPage.nodes[0]} />
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
