import NEArrow from "../svgs/NEArrow.js";

function AboutSection({ data }) {
  const aboutSectionTop = data.homePage.nodes[0].aboutSectionTop;
  const aboutSectionBottom = data.homePage.nodes[0].aboutSectionBottom;
  const aboutSectionImageHip = {
    url: data.homePage.nodes[0].aboutSectionImageHip.mediaItemUrl,
    alt: data.homePage.nodes[0].aboutSectionImageHip.altText,
  };
  const aboutSectionImageKnee = {
    url: data.homePage.nodes[0].aboutSectionImageKnee.mediaItemUrl,
    alt: data.homePage.nodes[0].aboutSectionImageKnee.altText,
  };
  const aboutSectionImageShoulder = {
    url: data.homePage.nodes[0].aboutSectionImageShoulder.mediaItemUrl,
    alt: data.homePage.nodes[0].aboutSectionImageShoulder.altText,
  };

  return (
    <div className="about-section-container">
      <div className="about-section-text">
        {/* TO DO: need to figure out how to add in the hyperlinks to the text */}
        <p>{aboutSectionTop}</p>
        <br></br>
        <p>{aboutSectionBottom}</p>
        <div className="about-section-buttons">
          <button className="green">MAKE AN APPOINTMENT</button>
          <button className="white">LEARN MORE ABOUT OUR SPECIALISTS</button>
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
