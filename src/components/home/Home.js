import Hero from "./Hero.js";
import AboutSection from "./AboutSection.js";
import RatingSection from "./RatingSection.js";
import ReasonsSection from "./ReasonsSection.js";
import Testimonials from "./Testimonals.js";
import Accolades from "./Accolades.js";
import LatestNews from "./LatestNews.js";
import { useQuery, gql } from "@apollo/client";
// import React, { useEffect } from "react";
// TO DO: switch from a content module to a page?

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
          <RatingSection />
          <ReasonsSection />
          <Testimonials />
          <Accolades />
          <LatestNews />
        </div>
      ) : null}
    </>
  );
}

export default Home;