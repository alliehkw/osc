import DownCarrot from "../../svgs/DownCarrot.js";

function WhatWeDoDropDowns({ what_we_do_data, drop_downs_data }) {
  // Initialize variables to store JSX elements
  let orthoElements = [];
  let therapyElements = [];

  // Loop through the data array and populate the variables
  drop_downs_data.forEach((item, index) => {
    console.log(item.dropDownContent.length);
    if (item.dropDownCategory[0] === "therapy") {
      therapyElements.push(
        <div key={index} className="dropdown therapy">
          <div className="title-with-carrot">
            <p className="allCaps dd">{item.dropDownTitle}</p>
            <div className="carrot">
              <DownCarrot className="down-carrot" svgColor={"#112E3D"} />
            </div>
          </div>
          <p
            className="richText body-text"
            dangerouslySetInnerHTML={{
              __html: item.dropDownContent,
            }}
          ></p>
        </div>
      );
    } else if (item.dropDownCategory[0] === "orthoCare") {
      orthoElements.push(
        <div key={index} className="dropdown ortho">
          <div className="title-with-carrot">
            <p className="allCaps dd">{item.dropDownTitle}</p>
            <div className="carrot">
              <DownCarrot className="down-carrot" svgColor={"#112E3D"} />
            </div>
          </div>
          <p
            className="richText body-text"
            dangerouslySetInnerHTML={{
              __html: item.dropDownContent,
            }}
          ></p>
        </div>
      );
    }
  });

  return (
    <div className="drop-downs-container">
      <div className="section">
        <h3 className="section-title">{what_we_do_data.orthoCareTitle}</h3>
        {orthoElements}
      </div>
      <div className="section">
        <h3 className="section-title">{what_we_do_data.therapyTitle}</h3>
        {therapyElements}
      </div>
      <div className="section">
        <h3 className="section-title">{what_we_do_data.researchTitle}</h3>
        <p
          className="richText body-text"
          dangerouslySetInnerHTML={{
            __html: what_we_do_data.researchContent,
          }}
        ></p>
      </div>
    </div>
  );
}

export default WhatWeDoDropDowns;
