import Hero from "./Hero.js";
import AboutSection from "./AboutSection";

function Doctors({ data }) {
  return (
    <div className="doctors-container">
      <Hero hero_data={data.allDoctorsPage.nodes[0]} />
      <AboutSection
        hero_data={data.allDoctorsPage.nodes[0]}
        doctors_data={data.doctors.nodes}
      />
    </div>
  );
}

export default Doctors;
