function Therapist({ therapist_data }) {
  return (
    <div className="therapist-container">
      <div className="therapist-header">
        <h2>{therapist_data.therapistTagLine}</h2>
        <h5>{therapist_data.therapistAbout}</h5>
      </div>
      <div className="therapist">
        <div className="therapist-image">
          <img
            src={therapist_data.therapistImage.mediaItemUrl}
            alt={therapist_data.therapistImage.altText}
          />
        </div>
        <div className="therapist-description">
          <h4>{therapist_data.therapistName}</h4>
          <p className="allCaps">{therapist_data.therapistTitle}</p>
          <h5
            className="richText"
            dangerouslySetInnerHTML={{
              __html: therapist_data.therapistDescription,
            }}
          ></h5>
        </div>
      </div>
    </div>
  );
}

export default Therapist;
