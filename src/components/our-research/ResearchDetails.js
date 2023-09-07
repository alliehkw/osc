import React, { useState } from "react";
import HighlightedResearch from "./HighlightedResearch";
// TO DO: figure out what to do about past research studies
function ResearchDetails({ our_research_data, active_projects_data }) {
  const [hideShowResearch, setHideShowResearch] = useState({
    current: true,
    ongoing: false,
    past: false,
  });
  const currentProjects = [];
  const ongoingProjects = [];
  const pastProejcts = [];

  active_projects_data.forEach((project) => {
    if (project.typeOfProject[0] === "current") {
      currentProjects.push(project);
    } else if (project.typeOfProject[0] === "ongoing") {
      ongoingProjects.push(project);
    }
  });

  //   Hide/show the research based off of white button is clicked
  function showHighlightedResearch(researchType) {
    const hideShowTemp = {
      current: researchType === "current",
      ongoing: researchType === "ongoing",
      past: researchType === "past",
    };
    console.log(hideShowTemp);
    setHideShowResearch(hideShowTemp);
  }
  return (
    <div className="research-details-container">
      <div className="researh-nav">
        <button
          className="unbound-button"
          onClick={() => showHighlightedResearch("current")}
        >
          <p
            className={`allCaps gray ${
              hideShowResearch.current ? "active" : ""
            }`}
          >
            {our_research_data.currentResearchTitle}
          </p>
        </button>
        <button
          className="unbound-button"
          onClick={() => showHighlightedResearch("ongoing")}
        >
          <p
            className={`allCaps gray ${
              hideShowResearch.ongoing ? "active" : ""
            }`}
          >
            {our_research_data.ongoingStudiesTitle}
          </p>{" "}
        </button>
        <button
          className="unbound-button"
          onClick={() => showHighlightedResearch("past")}
        >
          <p
            className={`allCaps gray ${hideShowResearch.past ? "active" : ""}`}
          >
            {our_research_data.pastResearchTitle}
          </p>
        </button>
      </div>
      <div className="highlighted-research">
        {hideShowResearch.current ? (
          <HighlightedResearch
            title={our_research_data.currentResearchTitle}
            project_data={currentProjects}
          />
        ) : null}
        {hideShowResearch.ongoing ? (
          <HighlightedResearch
            title={our_research_data.ongoingStudiesTitle}
            project_data={ongoingProjects}
          />
        ) : null}
        {hideShowResearch.past ? (
          <HighlightedResearch title={our_research_data.pastResearchTitle} />
        ) : null}
      </div>
    </div>
  );
}

export default ResearchDetails;
