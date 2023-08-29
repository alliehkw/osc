import React, { useState, useEffect } from "react";
import TestimonialsRotator from "./TestimonialsRotator";
import BackArrow from "../svgs/BackArrow.js";
import FrontArrow from "../svgs/FrontArrow.js";

function Testimonials({
  testimonials_data,
  header,
  reviewButtonTitle,
  reviewButtonExplanation,
}) {
  function handleForwardClick(currentIndex, setCurrentIndex) {
    const nextIndex = (currentIndex + 1) % testimonials_data.length;
    setCurrentIndex(nextIndex);
    clearInterval(intervalRef.current);
    startInterval(nextIndex);
  }

  function handleBackwardClick(currentIndex, setCurrentIndex) {
    const prevIndex =
      (currentIndex - 1 + testimonials_data.length) % testimonials_data.length;
    setCurrentIndex(prevIndex);
    clearInterval(intervalRef.current);
    startInterval(prevIndex);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startInterval = (index) => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials_data.length
      );
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
            testimonials={testimonials_data}
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
