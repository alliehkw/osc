import "../../styles/HeroStyles.css";

function Hero({ tagline, pageTitle, hero_size }) {
  return (
    <div id="hero" className={hero_size}>
      <p className="allCaps">{pageTitle}</p>
      <h1>{tagline}</h1>
    </div>
  );
}

export default Hero;
