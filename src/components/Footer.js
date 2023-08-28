function Footer({ data }) {
  const logo = {
    url: data.allFooter.nodes[0].oSCLogo.mediaItemUrl,
    alt: data.allFooter.nodes[0].oSCLogo.altText,
  };
  const address = data.allFooter.nodes[0].oSCAddress;
  const phone1 = data.allFooter.nodes[0].oSCPhoneNumber1;
  const phone2 = data.allFooter.nodes[0].oSCPhoneNumber2;
  const hours = data.allFooter.nodes[0].oSCHours;

  return (
    <div className="footer-container">
      <div className="footer-logo">
        <div>
          <img
            src={`${logo.url}`}
            alt={`${logo.alt}`}
            // TO DO: move styling out of inline?
            style={{ height: "70px" }}
          />
        </div>
      </div>
      <div className="footer-text">
        <div className="footer-left">
          <p className="subtext">{address}</p>
          <div>
            <p className="subtext">{phone1}</p>
            <p className="subtext">{phone2}</p>
          </div>
          <p className="subtext">{hours}</p>
        </div>
        {/* TO DO: add in all these links  */}
        <div className="footer-right">
          <div className="footer-right-sub-container">
            <p className="footer-header">FOR PATIENTS</p>
            <p className="subtext">Patient Forms</p>
            <p className="subtext">Request an Appointment</p>
            <p className="subtext">Patient Survery</p>
          </div>
          <div className="footer-right-sub-container">
            <p className="footer-header">INFORMATION</p>
            <p className="subtext">Where we operate</p>
            <p className="subtext">Photos of our facility</p>
            <p className="subtext">Pre-Op information</p>
            <p className="subtext">Post-Op information</p>
          </div>
          <div>
            <p className="footer-header">FOR DOCTORS</p>
            <p className="subtext">Refer a patient</p>
            <p className="subtext">See Our Research</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy-right">
          © 2023 Spokane Orthopedic Care | Orthopedic Specialists in Spokane.
        </p>
        <p className="privacy-policy">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
