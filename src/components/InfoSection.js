import React from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "../images/EventsPDF.pdf";

const InfoSection = ({
  title,
  body,
  btnTitle,
  btnUrl,
  btnColor,
  img,
  imgHeight,
  imgWidth,
}) => {
  const navigate = useNavigate();
  const onBtnClick = () => navigate(Pdf);
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
