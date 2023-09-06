import "../../../styles/WhatWeDoStyles.css";
import Hero from "../../Reusables/Hero.js";
import AboutSection from "../../Reusables/AboutSection.js";
import WhatWeDoDropDowns from "./WhatWeDoDropDowns.js";

function WhatWeDo({ what_we_do_data, drop_downs_data }) {
  return (
    <div className="what-we-do-container">
      <Hero
        tagline={what_we_do_data.whatWeDoTagline}
        pageTitle={"about us"}
        hero_size={"short"}
      />
      <AboutSection
        about_section_data={what_we_do_data.whatWeDoAboutSection}
        color={"green"}
      />
      <WhatWeDoDropDowns
        what_we_do_data={what_we_do_data}
        drop_downs_data={drop_downs_data}
      />
    </div>
  );
}
export default WhatWeDo;
