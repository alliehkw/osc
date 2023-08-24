function ReasonsSection({ data }) {
  const header = data.homePage.nodes[0].reasonsSectionHeader;
  console.log(data);
  // TO DO: get the ratings in the right order once I can talk to Atlas customer service
  let counter = 0;
  const reasonsBlock = data.reasons.nodes.map((reason) => {
    counter++;
    return (
      <div className="reason-block">
        <div className="reasons-image">
          <img
            src={reason.reasonImage.mediaItemUrl}
            alt={reason.reasonImage.altText}
          />
          <div className="reasons-number">
            <h4>{counter}</h4>
          </div>
        </div>
        <h5>{reason.reasonTitle}</h5>
        <h6>{reason.reasonExplaination}</h6>
        {/* TO DO: this is gonna be a button  */}
        <p className="read-more">{`READ MORE >>`}</p>
      </div>
    );
  });

  return (
    <div className="reasons-section-container">
      <h2>{header}</h2>
      <div className="reasons-block">{reasonsBlock}</div>
    </div>
  );
}

export default ReasonsSection;
