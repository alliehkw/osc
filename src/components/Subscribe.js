function Subscribe({ subscribe_data, header }) {
  const subscribeBlock = subscribe_data.map((field, index) => {
    return (
      <div className="subscribe-field">
        <label key={index}>{field.fieldInput}</label>
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
        <form className="subscribe-form">{subscribeBlock}</form>
        <div className="subscribe-button-container">
          <button className="green">subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
