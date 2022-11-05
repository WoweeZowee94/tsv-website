import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillPhone } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div className="SocialIconsContainer">
      <a href="https://www.facebook.com/ThreeSeasonsCafeCT">
        <AiFillFacebook className="icon-facebook" />
      </a>
      <a href="https://www.linkedin.com/company/three-seasons-view-cafe">
        <AiFillLinkedin className="icon-linkedin" />
      </a>
      <a href="tel:18606445077">
        <AiFillPhone className="icon-phone" href="tel:8606445077" />
      </a>
    </div>
  );
};

export default SocialIcons;
