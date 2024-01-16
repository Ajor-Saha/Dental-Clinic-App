import React from "react";
import ImageSlider from "./ImageSlider";
import dd1 from "../../assets/dd1.jpg";
import dd2 from "../../assets/dd2.jpg";
import dd3 from "../../assets/dd3.jpg";
import dd4 from "../../assets/dd4.jpg";

const Slider = () => {
  const slides = [
    { url: dd1, title: "beach" },
    { url: dd2, title: "boat" },
    { url: dd3, title: "forest" },
    { url: dd4, title: "city" },
  ];

  const containerStyles = {
    width: "100%",
    height: "580px",
    margin: "0 auto",
    position: "relative",
  };

  const centerContentStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="py-32 bg-slate-200">
      <div className="container mx-auto" style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={1500} />
        <div style={centerContentStyles}>
          <h3 className="text-blue-400 text-2xl font-semibold">We believe that everyone should have access to dental care.</h3>
          <button className=" text-blue-400 font-semibold border-2 border-blue-400 px-4 py-2 bg-transparent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
