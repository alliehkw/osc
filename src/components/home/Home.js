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
        testimonialsSectionHeader
        reviewButtonExplanation
        reviewButtonTitle
        accoladesTitle
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
    testimonials {
      nodes {
        name
        reviewDate
        review
        stars
      }
    }
    accolades {
      nodes {
        stars
        brandLogo {
          altText
          mediaItemUrl
        }
        brandName {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(home_data);

  return (
    <>
      {!loading ? (
        <div className="home-container">
          <Hero data={data} />
          <AboutSection data={data} />
          <RatingSection data={data} />
          <ReasonsSection data={data} />
          <Testimonials data={data} />
          <Accolades data={data} />
          <LatestNews />
        </div>
      ) : null}
    </>
  );
}

export default Home;
