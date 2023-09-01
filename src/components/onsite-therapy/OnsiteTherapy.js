import Hero from "../Hero.js";
import AboutSection from "./AboutSection.js";
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
      />
      <PostOpCare postOpCare_data={data.allTherapyPage.nodes[0]} />
      <Therapist therapist_data={data.allTherapyPage.nodes[0]} />
    </div>
  );
}

export default OnsiteTherapy;
