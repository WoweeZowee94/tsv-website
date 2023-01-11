import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

import React from "react";

const MobileMenu = () => {
  const closeNav = () => {
    document.getElementById("MobileOverlay").style.height = "0%";
  };
  return (
    <div className="MobileOverlay" id="MobileOverlay">
      <AiOutlineClose
        onClick={() => closeNav()}
        className="MobileOverlayCloseBtn"
      />
      <div className="MobileOverlayContent">
        <Link to="/" onClick={() => closeNav()} className="MobileLink">
          Home
        </Link>
        <Link to="/menu" onClick={() => closeNav()} className="MobileLink">
          Menu
        </Link>
        <Link to="/events" onClick={() => closeNav()} className="MobileLink">
          Events
        </Link>
        <Link className="MobileLink">Golf</Link>
        <SocialIcons style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default MobileMenu;
