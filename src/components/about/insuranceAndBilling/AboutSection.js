function AboutSection({ insurance_and_billing_data }) {
  return (
    <div className="about-section-container green">
      <div id="insurance">
        <p
          className="richText body-text"
          dangerouslySetInnerHTML={{
            __html: insurance_and_billing_data.insuranceAndBillingAboutSection,
          }}
        ></p>
        <div className="billing-links">
          <a
            href={insurance_and_billing_data.creditAndPaymentPDF.mediaItemUrl}
            target="_blank"
            rel="noreferrer"
          >
            <p className="allCaps">
              {insurance_and_billing_data.creditAndPaymentTitle}
            </p>
          </a>
          <a
            href={
              insurance_and_billing_data.noticeOfPrivacyPracticesPDF
                .mediaItemUrl
            }
            target="_blank"
            rel="noreferrer"
          >
            <p className="allCaps">
              {insurance_and_billing_data.noticeOfPrivacyPracticesTitle}
            </p>
          </a>
        </div>
        <p
          className="richText body-text"
          dangerouslySetInnerHTML={{
            __html: insurance_and_billing_data.creditCardAboutSection,
          }}
        ></p>
      </div>
    </div>
  );
}

export default AboutSection;
