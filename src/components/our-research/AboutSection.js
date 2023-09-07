function AboutSection({ our_research_data }) {
  return (
    <div className="about-section-container green">
      <div id="our-research">
        <div className="our-research-text">
          <p
            className="richText body-text"
            dangerouslySetInnerHTML={{
              __html: our_research_data.ourResearchAboutSection,
            }}
          ></p>
        </div>
        <div className="our-research-image">
          <img
            src={our_research_data.ourResearchImage.mediaItemUrl}
            alt={our_research_data.ourResearchImage.altText}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
