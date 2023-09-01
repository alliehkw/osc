function PhysiciansAssistant({ PA_data }) {
  return (
    <div className="PA-container">
      <h2>{PA_data.physiciansAssistantPageTageline}</h2>
      <div className="PA-info">
        <div className="PA-image">
          <img
            src={PA_data.physiciansAssistantImage.mediaItemUrl}
            alt={PA_data.physiciansAssistantImage.altText}
          />
        </div>
        <div className="PA-content">
          <h4>{PA_data.physiciansAssistantName}</h4>
          <h5
            className="richText"
            dangerouslySetInnerHTML={{
              __html: PA_data.physiciansAssistantContent,
            }}
          ></h5>
        </div>
      </div>
    </div>
  );
}

export default PhysiciansAssistant;
