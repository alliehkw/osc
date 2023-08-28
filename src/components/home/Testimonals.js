import React, { useState, useEffect } from "react";
import TestimonialsRotator from "./TestimonialsRotator";
import BackArrow from "../svgs/BackArrow.js";
import FrontArrow from "../svgs/FrontArrow.js";

function Testimonials({ data }) {
  const header = data.homePage.nodes[0].testimonialsSectionHeader;
  const reviewButtonTitle = data.homePage.nodes[0].reviewButtonTitle;
  const reviewButtonExplanation =
    data.homePage.nodes[0].reviewButtonExplanation;
  const testimonials = data.testimonials.nodes;

  // const formatDate = (inputDate) => {
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   return new Date(inputDate).toLocaleDateString(undefined, options);
  // };

  // const TestimonialsRotator = ({ testimonials }) => {
  //   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentTestimonialIndex(
  //         (prevIndex) => (prevIndex + 1) % testimonials.length
  //       );
  //     }, 15000); // 15 seconds

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [testimonials.length]);

  //   const currentTestimonial = testimonials[currentTestimonialIndex];
  //   const formattedDate = formatDate(currentTestimonial.reviewDate);

  //   return (
  //     <div className="testimonial">
  //       <div
  //         className="stars"
  //         style={{ "--stars": currentTestimonial.stars }}
  //       ></div>
  //       <p className="review">{currentTestimonial.review}</p>
  //       <p className="reviewName">{currentTestimonial.name}</p>
  //       <p className="allCaps">{formattedDate}</p>
  //     </div>
  //   );
  // };

  function handleForwardClick(currentIndex, setCurrentIndex) {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    clearInterval(intervalRef.current);
    startInterval(nextIndex);
  }

  function handleBackwardClick(currentIndex, setCurrentIndex) {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    clearInterval(intervalRef.current);
    startInterval(prevIndex);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startInterval = (index) => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);
  };

  useEffect(() => {
    startInterval(currentIndex);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="testimonials-container">
      <div className="testimonials-container-left">
        <h2>{header}</h2>
        <div className="review-button-container">
          <h4>{reviewButtonTitle}</h4>
          <h5>{reviewButtonExplanation}</h5>
          <div>
            <button className="green">leave a review</button>
          </div>
        </div>
      </div>
      <div className="testimonials-container-right">
        <div className="testimonial-block">
          <TestimonialsRotator
            testimonials={testimonials}
            currentIndex={currentIndex}
          />
        </div>
        <div className="arrows">
          {/* TO DO: make testimonials cycle through on click  */}
          <button
            className="back-arrow"
            onClick={() => handleBackwardClick(currentIndex, setCurrentIndex)}
          >
            <BackArrow />
          </button>
          <button
            className="front-arrow"
            onClick={() => handleForwardClick(currentIndex, setCurrentIndex)}
          >
            <FrontArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
