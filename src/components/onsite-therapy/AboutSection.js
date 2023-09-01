function AboutSection({ about_section_data }) {
  return (
    <div id="therapy-about-section" className="about-section-container">
      <div className="about-section-text">
        <h5
          className="richText"
          dangerouslySetInnerHTML={{
            __html: about_section_data,
          }}
        ></h5>
      </div>
    </div>
  );
}

export default AboutSection;
