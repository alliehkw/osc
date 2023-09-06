import "../../styles/HomePageStyles.css";
import Hero from "./Hero.js";
import AboutSection from "./AboutSection.js";
import RatingSection from "./RatingSection.js";
import ReasonsSection from "./ReasonsSection.js";
import Testimonials from "./Testimonals.js";
import Accolades from "./Accolades.js";
import LatestNews from "./LatestNews.js";

function Home({ data, loading }) {
  return (
    <>
      {!loading ? (
        <div className="home-container">
          <Hero data={data.homePage} />
          <AboutSection data={data.homePage} />
          <RatingSection
            ratings_data={data.ratings.nodes}
            header={data.homePage.nodes[0].ratingSectionHeader}
          />
          <ReasonsSection
            reasons_data={data.reasons.nodes}
            header={data.homePage.nodes[0].reasonsSectionHeader}
          />
          <Testimonials
            testimonials_data={data.testimonials.nodes}
            header={data.homePage.nodes[0].testimonialsSectionHeader}
            reviewButtonTitle={data.homePage.nodes[0].reviewButtonTitle}
            reviewButtonExplanation={
              data.homePage.nodes[0].reviewButtonExplanation
            }
          />
          <Accolades
            accolades_data={data.accolades.nodes}
            header={data.homePage.nodes[0].accoladesTitle}
          />
          <LatestNews
            newsStories_data={data.newsStories.nodes}
            header={data.homePage.nodes[0].latestNewsTitle}
          />
        </div>
      ) : null}
    </>
  );
}

export default Home;
