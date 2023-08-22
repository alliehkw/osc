import AboutSection from "./AboutSection.js";
import RatingSection from "./RatingSection.js";
import ReasonsSection from "./ReasonsSection.js";
import Testimonials from "./Testimonals.js";
import Accolades from "./Accolades.js";
import LatestNews from "./LatestNews.js";

function Home() {
  return (
    <div className="home-container">
      <p>Home</p>
      <AboutSection />
      <RatingSection />
      <ReasonsSection />
      <Testimonials />
      <Accolades />
      <LatestNews />
    </div>
  );
}

export default Home;
