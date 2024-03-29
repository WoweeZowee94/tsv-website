import React from "react";
import { Avatar } from "@mui/material";

const OurTeam = () => {
  return (
    <div className="OurTeamContainer">
      <div className="OurTeam">
        <h1 className="OurTeamTagline"> Our Team </h1>
        <div className="OurTeamInfo">
          <div className="InfoContainer">
            <Avatar
              className="TeamInfoAvatar"
              style={{
                height: "190px",
                width: "180px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={`${require("../../images/TracyJPG.jpg")}`}
            />
            <p className="TeamInfoHeader"> Tracy Gray </p>
            <p className="TeamInfoDesc"> Manager </p>
          </div>
          <div className="InfoContainer">
            <Avatar
              className="TeamInfoAvatar"
              style={{
                height: "190px",
                width: "180px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={`${require("../../images/KrisJPG.jpg")}`}
            />
            <p className="TeamInfoHeader"> Chris Kelley </p>
            <p className="TeamInfoDesc"> Kitchen Manager</p>
          </div>
          <div className="InfoContainer">
            <Avatar
              className="TeamInfoAvatar"
              style={{
                height: "190px",
                width: "180px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={`${require("../../images/DrewJPG.jpg")}`}
            />
            <p className="TeamInfoHeader"> Drew Goodsell </p>
            <p className="TeamInfoDesc"> Executive Chef </p>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1672709321">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default OurTeam;
