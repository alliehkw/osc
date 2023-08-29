function ReasonsSection({ header, reasons_data }) {
  // TO DO: get the ratings in the right order once I can talk to Atlas customer service
  let counter = 0;
  const reasonsBlock = reasons_data.map((reason, index) => {
    counter++;
    return (
      <div className="card-block" key={index}>
        <div className="card-image">
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
    <div className="cards-container">
      <h2>{header}</h2>
      <div className="cards-block">{reasonsBlock}</div>
    </div>
  );
}

export default ReasonsSection;
