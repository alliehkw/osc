function Quality({ about_us_data }) {
  return (
    <div className="block-container">
      <div className="image">
        <img
          src={about_us_data.aboutUsQualityImage.mediaItemUrl}
          alt={about_us_data.aboutUsQualityImage.altText}
        />
      </div>
      <div className="text">
        <h3>{about_us_data.aboutUsQualityHeader}</h3>
        <p
          className="body-text richText"
          dangerouslySetInnerHTML={{
            __html: about_us_data.aboutUsQualityContent,
          }}
        ></p>
      </div>
    </div>
  );
}

export default Quality;
