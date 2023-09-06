import Hero from "../Reusables/Hero.js";
import AboutSection from "../Reusables/AboutSection.js";

function PatientEducation({ data }) {
  return (
    <div className="patient-education-container">
      <Hero
        tagline={
          data.allPatientEducationPage.nodes[0].patientEducationPageTagline
        }
        pageTitle={"patient education"}
        hero_size={"tall"}
      />
      <AboutSection
        about_section_data={
          data.allPatientEducationPage.nodes[0].patientEducationPageAboutSection
        }
        color={"green"}
      />
    </div>
  );
}

export default PatientEducation;
