import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/Footer.js";
import Subscribe from "./components/Subscribe.js";
import Home from "./components/home/Home.js";
import Doctors from "./components/about/doctors/Doctors.js";
import PatientEducation from "./components/patient-education/PatientEducation";
import OnsiteTherapy from "./components/onsite-therapy/OnsiteTherapy.js";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/ScrollToTop";

const app_data = gql`
  {
    homePage {
      nodes {
        tagLine
        heroVideoURL
        heroVideoPoster {
          mediaItemUrl
        }
        aboutSection
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
        latestNewsTitle
        subscribeHeader
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
    newsStories {
      nodes {
        newsTitle
        newsDescription
        newsImage {
          altText
          mediaItemUrl
        }
      }
    }
    allFooter {
      nodes {
        oSCAddress
        oSCHours
        oSCLogo {
          altText
          mediaItemUrl
        }
        oSCPhoneNumber1
        oSCPhoneNumber2
      }
    }
    subscribeFields {
      nodes {
        fieldInput
        placeHolderText
      }
    }
    allDoctorsPage {
      nodes {
        doctorsPageAboutSection
        doctorsPageTagLine
      }
    }
    doctors {
      nodes {
        doctorsName
        doctorsPicture {
          altText
          mediaItemUrl
        }
        doctorsSpecialty
        profileSummary
        fellowshipProgramImage {
          altText
          mediaItemUrl
        }
        medicalSchoolImage {
          altText
          mediaItemUrl
        }
        residencyProgramImage {
          altText
          mediaItemUrl
        }
      }
    }
    allCertificationsPage {
      nodes {
        boardCertificationImage {
          altText
          mediaItemUrl
        }
        certificationsPageContentLeft
        certificationsPageContentRight
        certificationsPageTagline
        certificationsPageTitleLeft
        certificationsPageTitleRight
      }
    }
    allPhysicianAssistant {
      nodes {
        physiciansAssistantContent
        physiciansAssistantImage {
          altText
          mediaItemUrl
        }
        physiciansAssistantName
        physiciansAssistantPageTageline
      }
    }
    allPatientEducationPage {
      nodes {
        patientEducationPageTagline
        patientEducationPageAboutSection
      }
    }
    allTherapyPage {
      nodes {
        therapyPageAboutSection
        therapyPageTagline
        postOpCareContent
        postOpCareHeader
        postOpCareImage {
          altText
          mediaItemUrl
        }
        therapistAbout
        therapistDescription
        therapistImage {
          altText
          mediaItemUrl
        }
        therapistName
        therapistTagLine
        therapistTitle
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(app_data);
  // TO DO: error handling

  return (
    <>
      {!loading ? (
        <div className="App">
          <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={<Home data={data} loading={loading} />}
              />
              <Route path="/doctors" element={<Doctors data={data} />} />
              <Route
                path="/education"
                element={<PatientEducation data={data} />}
              />
              <Route
                path="/onsite-therapy"
                element={<OnsiteTherapy data={data} />}
              />
            </Routes>{" "}
          </Router>
          <Subscribe
            header={data.homePage.nodes[0].subscribeHeader}
            subscribe_data={data.subscribeFields.nodes}
          />
          <Footer footer_data={data.allFooter.nodes[0]} />
        </div>
      ) : null}
    </>
  );
}

export default App;
