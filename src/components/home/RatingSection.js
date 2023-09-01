function RatingSection({ ratings_data, header }) {
  // TO DO: get the ratings in the right order once I can talk to Atlas customer service
  const ratingsBlock = ratings_data.map((rating, index) => {
    return (
      <div className="ratings-block" key={index}>
        <div className="ratings-circle">
          <p className="body-text">{rating.statistic}</p>
        </div>
        <h5>{rating.statisticExplaination}</h5>
      </div>
    );
  });

  return (
    <div className="rating-section-container">
      <h2>{header}</h2>
      <div className="ratings">{ratingsBlock}</div>
    </div>
  );
}

export default RatingSection;
