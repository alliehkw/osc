import NEArrow from "../svgs/NEArrow.js";

function AboutSection({ data }) {
  const aboutSection = data.nodes[0].aboutSection;
  const aboutSectionImageHip = {
    url: data.nodes[0].aboutSectionImageHip.mediaItemUrl,
    alt: data.nodes[0].aboutSectionImageHip.altText,
  };
  const aboutSectionImageKnee = {
    url: data.nodes[0].aboutSectionImageKnee.mediaItemUrl,
    alt: data.nodes[0].aboutSectionImageKnee.altText,
  };
  const aboutSectionImageShoulder = {
    url: data.nodes[0].aboutSectionImageShoulder.mediaItemUrl,
    alt: data.nodes[0].aboutSectionImageShoulder.altText,
  };

  return (
    <div className="about-section-container">
      <div className="about-section-text">
        {/* TO DO: add in hyperlinks once I have the rest of the nav stuff set up */}
        <p
          className="richText body-text"
          dangerouslySetInnerHTML={{
            __html: aboutSection,
          }}
        ></p>
        <div className="about-section-buttons">
          <button className="green">make an appointment</button>
          <button className="white">learn more about our specialists</button>
        </div>
      </div>
      <div className="about-section-images">
        <div className="about-section-image">
          <div className="image-wrapper">
            <img
              src={aboutSectionImageHip.url}
              alt={aboutSectionImageHip.alt}
            />
          </div>
          <h5>Hip</h5>
          <NEArrow />
        </div>
        <div className="about-section-image">
          <div className="image-wrapper">
            <img
              src={aboutSectionImageKnee.url}
              alt={aboutSectionImageKnee.alt}
            />
          </div>
          <h5>Knee</h5>
          <NEArrow />
        </div>
        <div className="about-section-image">
          <div className="image-wrapper">
            <img
              src={aboutSectionImageShoulder.url}
              alt={aboutSectionImageShoulder.alt}
            />
          </div>
          <h5>Shoulder</h5>
          <NEArrow />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
