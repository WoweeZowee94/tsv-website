import SimpleImageSlider from "react-simple-image-slider";

import React from "react";

const ImageSlider = () => {
  const images = [ 
    { url: `${require("../../images/sliderimg1.jpg")}` }, 
    { url: `${require("../../images/sliderimg13.jpg")}` },
    { url: `${require("../../images/sliderimg0.jpg")}` },
    { url: `${require("../../images/sliderimg3.jpg")}` }, 
    { url: `${require("../../images/sliderimg14.jpg")}` },
    { url: `${require("../../images/sliderimg2.jpg")}` },
    { url: `${require("../../images/sliderimg6.png")}` },
    { url: `${require("../../images/sliderimg7.jpg")}` },
    { url: `${require("../../images/sliderimg12.jpg")}` },
    { url: `${require("../../images/sliderimg8.jpg")}` },
    ];
  return <div className="ImageSliderContainer">
    <SimpleImageSlider 
    className="ImageSlider"
    width={562}
    height={684}
    images={images}
    showBullets={false}
    showNavs={false}
    autoPlay={true}
    slideDuration={2}
    />
  </div>;
};

export default ImageSlider;
