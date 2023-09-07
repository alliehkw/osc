import Hero from "../../Reusables/Hero.js";
import AboutSection from "./AboutSection.js";
import "../../../styles/InsuranceStyles.css";

function InsuranceAndBilling({ insurance_and_billing_data }) {
  console.log(insurance_and_billing_data);
  return (
    <div className="insurance-and-billing-container">
      <Hero
        tagline={insurance_and_billing_data.insuranceAndBillingTagline}
        pageTitle={"info"}
        hero_size={"short"}
      />
      <AboutSection insurance_and_billing_data={insurance_and_billing_data} />
    </div>
  );
}
export default InsuranceAndBilling;
