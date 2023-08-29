function Accolades({ data }) {
  const accoladesTitle = data.homePage.nodes[0].accoladesTitle;
  const accolades = data.accolades.nodes;

  const accoladeBlock = accolades.map((accolade, index) => {
    console.log(accolade);
    return (
      <div className="accolade-block" key={index}>
        <div
          id="accoldate-stars"
          className="stars"
          style={{ "--stars": accolade.stars }}
        ></div>
        <div className="brand-images">
          {accolade.brandLogo ? (
            <>
              <div className="brand-logo">
                <img
                  src={accolade.brandLogo.mediaItemUrl}
                  alt={accolade.brandLogo.altText}
                />
              </div>
              <div className="brand-images-gap"></div>
            </>
          ) : null}
          {accolade.brandName ? (
            <div className="brand-name">
              <img
                src={accolade.brandName.mediaItemUrl}
                alt={accolade.brandName.altText}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  });

  return (
    <div className="accolades-container">
      <h2>{accoladesTitle}</h2>
      <div className="accolades">{accoladeBlock}</div>
    </div>
  );
}

export default Accolades;
