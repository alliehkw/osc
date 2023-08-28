import React, { useState, useEffect } from "react";

function TestimonialsRotator({ testimonials, currentIndex }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // new state for fading

  const formatDate = (inputDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setIsFading(true); // start fading out
    const fadeOutTimeout = setTimeout(() => {
      setCurrentTestimonialIndex(currentIndex);
      setIsFading(false); // done fading out, start fading in
    }, 500); // adjust the timeout duration as needed

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [currentIndex, testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const formattedDate = formatDate(currentTestimonial.reviewDate);

  return (
    <div
      id="testimonial"
      className={`testimonial ${isFading ? "fade-out" : "fade-in"}`}
    >
      <div
        className="stars"
        style={{ "--stars": currentTestimonial.stars }}
      ></div>
      <p className="review">{currentTestimonial.review}</p>
      <p className="reviewName">{currentTestimonial.name}</p>
      <p className="allCaps">{formattedDate}</p>
    </div>
  );
}

export default TestimonialsRotator;
