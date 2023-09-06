function Offerings({ about_us_data }) {
  console.log(about_us_data);
  return (
    <div className="block-container">
      <div className="text">
        <h3>{about_us_data.aboutUsOfferingsHeader}</h3>
        <p
          className="body-text richText"
          dangerouslySetInnerHTML={{
            __html: about_us_data.aboutUsOfferingsContent,
          }}
        ></p>
      </div>
      <div className="image">
        <img
          src={about_us_data.aboutUsOfferingsImage.mediaItemUrl}
          alt={about_us_data.aboutUsOfferingsImage.altText}
        />
      </div>
    </div>
  );
}

export default Offerings;
