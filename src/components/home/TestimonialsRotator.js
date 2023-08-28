import React, { useState, useEffect } from "react";

const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(inputDate).toLocaleDateString(undefined, options);
};

function TestimonialsRotator({ testimonials, currentIndex }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    setCurrentTestimonialIndex(currentIndex);
  }, [currentIndex, testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const formattedDate = formatDate(currentTestimonial.reviewDate);

  return (
    <div className="testimonial">
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
