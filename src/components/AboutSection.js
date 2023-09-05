function AboutSection({ about_section_data, color }) {
  console.log(color);
  return (
    <div
      className={
        color === "green"
          ? "about-section-container green"
          : "about-section-container white"
      }
    >
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
