import "../../../styles/AboutUsStyles.css";
import Hero from "../../Reusables/Hero.js";
import AboutSection from "../../Reusables/AboutSection.js";
import Quality from "./Quality.js";
import Offerings from "./Offerings.js";
import WhyOrthopaedics from "./WhyOrthopaedics.js";

function AboutUs({ about_us_data }) {
  return (
    <div className="about-us-container">
      <Hero
        tagline={about_us_data.aboutUsTagline}
        pageTitle={"about us"}
        hero_size={"short"}
      />
      <AboutSection
        about_section_data={about_us_data.aboutUsDescription}
        color={"green"}
      />
      <Quality about_us_data={about_us_data} />
      <Offerings about_us_data={about_us_data} />
      <WhyOrthopaedics
        header={about_us_data.whyOrthopaedicsHeader}
        content={about_us_data.whyOrthopaedicsContent}
      />
    </div>
  );
}
export default AboutUs;
