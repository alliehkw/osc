import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/Reusables/Footer.js";
import Subscribe from "./components/Reusables/Subscribe.js";
import Home from "./components/home/Home.js";
import AboutUs from "./components/about/aboutUs/AboutUs.js";
import WhatWeDo from "./components/about/whatWeDo/WhatWeDo.js";
import Doctors from "./components/about/doctors/Doctors.js";
import InsuranceandBilling from "./components/about/insuranceAndBilling/InsuranceAndBilling.js";
import PatientEducation from "./components/patient-education/PatientEducation";
import OnsiteTherapy from "./components/onsite-therapy/OnsiteTherapy.js";
import OurResearch from "./components/our-research/OurResearch.js";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/Reusables/ScrollToTop";

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
        therapyResourcesTagline
      }
    }
    therapyResourcesImages {
      nodes {
        therapyResourceImage {
          altText
          mediaItemUrl
        }
      }
    }
    allAboutUsPage {
      nodes {
        aboutUsDescription
        aboutUsOfferingsContent
        aboutUsOfferingsHeader
        aboutUsOfferingsImage {
          altText
          mediaItemUrl
        }
        aboutUsQualityContent
        aboutUsQualityHeader
        aboutUsQualityImage {
          altText
          mediaItemUrl
        }
        aboutUsTagline
        whyOrthopaedicsContent
        whyOrthopaedicsHeader
      }
    }
    whatWeDo {
      nodes {
        orthoCareTitle
        researchContent
        researchTitle
        therapyTitle
        whatWeDoAboutSection
        whatWeDoTagline
      }
    }
    whatWeDoDropDowns {
      nodes {
        dropDownCategory
        dropDownContent
        dropDownTitle
      }
    }
    allInsuranceAndBillingPage {
      nodes {
        creditAndPaymentPDF {
          altText
          mediaItemUrl
        }
        creditAndPaymentTitle
        creditCardAboutSection
        insuranceAndBillingAboutSection
        insuranceAndBillingTagline
        noticeOfPrivacyPracticesPDF {
          altText
          mediaItemUrl
        }
        noticeOfPrivacyPracticesTitle
      }
    }
    allOurResearchPage {
      nodes {
        currentResearchTitle
        ongoingStudiesTitle
        ourResearchAboutSection
        ourResearchImage {
          altText
          mediaItemUrl
        }
        ourResearchTagline
        pastResearchTitle
      }
    }
    researchProjects {
      nodes {
        projectMediaLink
        projectMedia {
          altText
          mediaItemUrl
        }
        projectDescription
        typeOfProject
      }
    }
    pastResearchProjects(first: 500) {
      nodes {
        projectAuthor
        projectDescription
        projectMedia {
          altText
          mediaItemUrl
        }
        projectTitle
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
              <Route
                path="/about-us"
                element={
                  <AboutUs about_us_data={data.allAboutUsPage.nodes[0]} />
                }
              />
              <Route
                path="/what-we-do"
                element={
                  <WhatWeDo
                    what_we_do_data={data.whatWeDo.nodes[0]}
                    drop_downs_data={data.whatWeDoDropDowns.nodes}
                  />
                }
              />
              <Route path="/doctors" element={<Doctors data={data} />} />
              <Route
                path="/insurance-and-billing"
                element={
                  <InsuranceandBilling
                    insurance_and_billing_data={
                      data.allInsuranceAndBillingPage.nodes[0]
                    }
                  />
                }
              />
              <Route
                path="/education"
                element={<PatientEducation data={data} />}
              />
              <Route
                path="/onsite-therapy"
                element={
                  <OnsiteTherapy
                    therapy_data={data.allTherapyPage.nodes[0]}
                    therapy_images={data.therapyResourcesImages.nodes}
                  />
                }
              />
              <Route
                path="/our-research"
                element={
                  <OurResearch
                    our_research_data={data.allOurResearchPage.nodes[0]}
                    active_projects_data={data.researchProjects.nodes}
                    past_research={data.pastResearchProjects.nodes}
                  />
                }
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
