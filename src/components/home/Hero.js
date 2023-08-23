function Hero({ data }) {
  const tagLine = data.homePage.nodes[0].tagLine;
  return (
    <div className="hero-container">
      <p>{tagLine}</p>
    </div>
  );
}

export default Hero;
