import ReactPlayer from "react-player";

function Hero({ data }) {
  const tagLine = data.homePage.nodes[0].tagLine;
  const heroVideo = data.homePage.nodes[0].heroVideoURL;
  const heroVideoPoster = data.homePage.nodes[0].heroVideoPoster.mediaItemUrl;
  return (
    <div className="hero-container" style={{ zIndex: 1, position: "relative" }}>
      {/* TO DO: hide text once video starts play */}
      {/* TO DO: make it so video starts playing when you click on the poster  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 208,
          width: "100%",
          zIndex: "2",
        }}
      >
        <h1 style={{ width: 996 }}>{tagLine}</h1>
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <ReactPlayer
          url={heroVideo}
          controls={true}
          width="100%"
          height="824px"
          light={heroVideoPoster}
        />
      </div>
    </div>
  );
}

export default Hero;
