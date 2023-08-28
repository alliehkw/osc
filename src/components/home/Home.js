import Hero from "./Hero.js";
import AboutSection from "./AboutSection.js";
import RatingSection from "./RatingSection.js";
import ReasonsSection from "./ReasonsSection.js";
import Testimonials from "./Testimonals.js";
import Accolades from "./Accolades.js";
import LatestNews from "./LatestNews.js";
import { useQuery, gql } from "@apollo/client";

const home_data = gql`
  {
    homePage {
      nodes {
        tagLine
        heroVideoURL
        heroVideoPoster {
          mediaItemUrl
        }
        aboutSectionBottom
        aboutSectionTop
        aboutSectionImageHip {
          mediaItemUrl
          altText
        }
        aboutSectionImageKnee {
          mediaItemUrl
          altText
        }
        aboutSectionImageShoulder {
          mediaItemUrl
          altText
        }
        ratingSectionHeader
        reasonsSectionHeader
      }
    }
    ratings {
      nodes {
        statistic
        statisticExplaination
      }
    }
    reasons {
      nodes {
        reasonTitle
        reasonExplaination
        reasonImage {
          mediaItemUrl
          altText
        }
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(home_data);

  return (
    <>
      {/* <h1>H1 Test</h1>
      <h2>H2 Test</h2>
      <h3>H3 Test</h3>
      <h4>H4 Test</h4>
      <h5>H5 Test</h5>
      <h6>H6 Test</h6>
      <p>Body Test</p>
      <p className="allCaps">allCaps Test</p>
      <p className="subtext">subtext Test</p>
      <button>Button Test</button> */}
      {!loading ? (
        <div className="home-container">
          <Hero data={data} />
          <AboutSection data={data} />
          <RatingSection data={data} />
          <ReasonsSection data={data} />
          <Testimonials />
          <Accolades />
          <LatestNews />
        </div>
      ) : null}
    </>
  );
}

export default Home;
