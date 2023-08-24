function AboutSection({ data }) {
  const aboutSection = data.homePage.nodes[0].aboutSection;
  // TO DO: why is the rich text returning with p tags?
  // console.log(aboutSection);
  return (
    <div className="about-section-container">
      {/* TO DO: need to figure out how to add in the hyperlinks to the text */}
      <p>{aboutSection}</p>
      <button className="green">MAKE AN APPOINTMENT</button>
      <button className="white">LEARN MORE ABOUT OUR SPECIALISTS</button>
    </div>
  );
}

export default AboutSection;
