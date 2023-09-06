import "../../styles/SubscribeAndFooterStyles.css";

function Subscribe({ subscribe_data, header }) {
  const subscribeBlock = subscribe_data.map((field, index) => {
    return (
      <div className="subscribe-field" key={index}>
        <label>{field.fieldInput}</label>
        <input
          type="text"
          name={field.fieldInput}
          placeholder={field.placeHolderText}
        />
      </div>
    );
  });
  return (
    <div className="subscribe-container">
      <div className="subscribe-bounding-box">
        <h2>{header}</h2>
        {/* TO DO: MAKE THIS AN ACTIVE FORM AND SAVE THE INPUTS FROM THE USER! */}
        <form className="subscribe-form">{subscribeBlock}</form>
        <div className="subscribe-button-container">
          <button className="green">subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
