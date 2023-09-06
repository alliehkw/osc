import "../../styles/TherapyStyles.css";
import Hero from "../Reusables/Hero.js";
import AboutSection from "../Reusables/AboutSection.js";
import PostOpCare from "./PostOpCare.js";
import Therapist from "./Therapist.js";

function OnsiteTherapy({ data }) {
  return (
    <div className="onsite-therapy-container">
      <Hero
        tagline={data.allTherapyPage.nodes[0].therapyPageTagline}
        pageTitle={"on-site therapy"}
        hero_size={"tall"}
      />
      <AboutSection
        about_section_data={
          data.allTherapyPage.nodes[0].therapyPageAboutSection
        }
        color={"white"}
      />
      <PostOpCare postOpCare_data={data.allTherapyPage.nodes[0]} />
      <Therapist therapist_data={data.allTherapyPage.nodes[0]} />
      {/* TO DO: ADD IN THIS LAST SECTION  */}
      <h2>ADD IN ONSITE THERAPY RESOURCES CAROSEL</h2>
    </div>
  );
}

export default OnsiteTherapy;
