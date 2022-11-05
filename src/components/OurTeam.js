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
                height: "200px",
                width: "190px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="TeamInfoHeader"> Tracy Gray </p>
            <p className="TeamInfoDesc">
              {" "}
              Co-Owner, <br /> General Manager{" "}
            </p>
          </div>
          <div className="InfoContainer">
            <Avatar
              className="TeamInfoAvatar"
              style={{
                height: "200px",
                width: "190px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="TeamInfoHeader"> Kris Kelley </p>
            <p className="TeamInfoDesc">
              {" "}
              Co-Owner, <br /> General Manager{" "}
            </p>
          </div>
          <div className="InfoContainer">
            <Avatar
              className="TeamInfoAvatar"
              style={{
                height: "200px",
                width: "190px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="TeamInfoHeader"> Drew Chefman </p>
            <p className="TeamInfoDesc">
              {" "}
              Head Chef, <br /> Kitchen Manager{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
