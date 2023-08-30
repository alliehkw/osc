function Hero({ hero_data }) {
  const tagLine = hero_data.doctorsPageTagLine;
  return (
    <div className="doctors-hero">
      <p className="allCaps">doctors</p>
      <h1>{tagLine}</h1>
    </div>
  );
}

export default Hero;
