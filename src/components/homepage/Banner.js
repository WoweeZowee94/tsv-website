import { React } from "react";
import background from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="BannerImg"
      style={{
        backgroundImage: `url(${background})`,
        height: "400px",
        width: "100%",
        alignSelf: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        top: "0",
        left: "0",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Banner;
