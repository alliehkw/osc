import Hero from "../Reusables/Hero.js";
import AboutSection from "./AboutSection.js";
import ResearchDetails from "./ResearchDetails.js";
import "../../styles/OurResearchStyles.css";

function OurResearch({
  our_research_data,
  active_projects_data,
  past_research,
}) {
  return (
    <div className="our-research-container">
      <Hero
        tagline={our_research_data.ourResearchTagline}
        pageTitle={"our research"}
        hero_size={"tall"}
      />
      <AboutSection our_research_data={our_research_data} />
      <ResearchDetails
        our_research_data={our_research_data}
        active_projects_data={active_projects_data}
        past_research={past_research}
      />
    </div>
  );
}

export default OurResearch;
