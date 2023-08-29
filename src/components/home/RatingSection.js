function RatingSection({ data }) {
  const header = data.homePage.nodes[0].ratingSectionHeader;

  // TO DO: get the ratings in the right order once I can talk to Atlas customer service
  const ratingsBlock = data.ratings.nodes.map((rating, index) => {
    return (
      <div className="ratings-block" key={index}>
        <div className="ratings-circle">
          <p>{rating.statistic}</p>
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
