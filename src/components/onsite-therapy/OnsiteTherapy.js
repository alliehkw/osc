import "../../styles/TherapyStyles.css";
import Hero from "../Reusables/Hero.js";
import AboutSection from "../Reusables/AboutSection.js";
import PostOpCare from "./PostOpCare.js";
import Therapist from "./Therapist.js";
import TherapyResources from "./TherapyResources";

function OnsiteTherapy({ therapy_data, therapy_images }) {
  return (
    <div className="onsite-therapy-container">
      <Hero
        tagline={therapy_data.therapyPageTagline}
        pageTitle={"on-site therapy"}
        hero_size={"tall"}
      />
      <AboutSection
        about_section_data={therapy_data.therapyPageAboutSection}
        color={"white"}
      />
      <PostOpCare postOpCare_data={therapy_data} />
      <Therapist therapist_data={therapy_data} />
      {/* TO DO: ADD IN THIS LAST SECTION  */}
      <TherapyResources
        tagline={therapy_data.therapyResourcesTagline}
        images={therapy_images}
      />
    </div>
  );
}

export default OnsiteTherapy;
