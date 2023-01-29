import React from "react";
import Pdf from "../images/2023_menu.pdf";

const InfoSection = ({ title, body, btnTitle, imgHeight, imgWidth }) => {
  return (
    <div className="SectionContainer" style={{ borderRadius: "5px" }}>
      <img
        src={require("../images/eventsImage.png")}
        height={imgHeight}
        width={imgWidth}
        className="InfoSectionImage"
        alt="alt"
      />
      <div className="SectionInfoContainer">
        <h1 className="SectionTitle"> {title} </h1>
        <div> {body} </div>
      </div>
      <div className="InfoBtnSection">
        <div className="InfoBtnContainer SectionBtn">
          <a href={Pdf} className="InfoBtnLink">
            {btnTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
