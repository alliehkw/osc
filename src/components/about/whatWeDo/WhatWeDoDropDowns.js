import React, { useState } from "react";
import DownCarrot from "../../svgs/DownCarrot.js";

function WhatWeDoDropDowns({ what_we_do_data, drop_downs_data }) {
  // Initialize variables to store JSX elements
  let orthoElements = [];
  let therapyElements = [];

  // State variables to track visibility for each element
  const [dropdownsVisibility, setDropdownsVisibility] = useState(
    drop_downs_data.map(() => false)
  );

  // Function to toggle visibility of dropdown at a specific index
  const toggleDropdown = (index) => {
    const updatedVisibility = [...dropdownsVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setDropdownsVisibility(updatedVisibility);
  };

  // Loop through the data array and populate the variables
  drop_downs_data.forEach((item, index) => {
    if (item.dropDownCategory[0] === "therapy") {
      therapyElements.push(
        <div key={index} className="dropdown therapy">
          <div
            className="title-with-carrot"
            onClick={() => toggleDropdown(index)}
          >
            <p className="allCaps dd">{item.dropDownTitle}</p>
            <div className="carrot">
              <DownCarrot className="down-carrot" svgColor={"#112E3D"} />
            </div>
          </div>
          <div
            className={`hide-show ${
              dropdownsVisibility[index] ? "active" : ""
            }`}
          >
            <p
              className="richText body-text"
              dangerouslySetInnerHTML={{
                __html: item.dropDownContent,
              }}
            ></p>
          </div>
        </div>
      );
    } else if (item.dropDownCategory[0] === "orthoCare") {
      orthoElements.push(
        <div key={index} className="dropdown ortho">
          <div
            className="title-with-carrot"
            onClick={() => toggleDropdown(index)}
          >
            <p className="allCaps dd">{item.dropDownTitle}</p>
            <div className="carrot">
              <DownCarrot
                className={`down-carrot ${
                  dropdownsVisibility[index] ? "active" : ""
                }`}
                svgColor={"#112E3D"}
              />
            </div>
          </div>
          <div
            className={`hide-show ${
              dropdownsVisibility[index] ? "active" : ""
            }`}
          >
            <p
              className="richText body-text"
              dangerouslySetInnerHTML={{
                __html: item.dropDownContent,
              }}
            ></p>
          </div>
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
        <div className="research-text">
          <p
            className="richText body-text"
            dangerouslySetInnerHTML={{
              __html: what_we_do_data.researchContent,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoDropDowns;
