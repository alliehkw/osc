function Certifications({ certification_data }) {
  return (
    <div className="certifications-page-container">
      <h2>{certification_data.certificationsPageTagline}</h2>
      <div className="certifications-content">
        <div className="certifications-left">
          <h4>{certification_data.certificationsPageTitleLeft}</h4>
          <h5>{certification_data.certificationsPageContentLeft}</h5>
          <div className="boards-cert-image">
            <img
              src={certification_data.boardCertificationImage.mediaItemUrl}
              alt={certification_data.boardCertificationImage.altText}
            />
          </div>
        </div>
        <div className="certifications-right">
          <h4>{certification_data.certificationsPageTitleRight}</h4>
          <h5
            className="richText"
            dangerouslySetInnerHTML={{
              __html: certification_data.certificationsPageContentRight,
            }}
          ></h5>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
