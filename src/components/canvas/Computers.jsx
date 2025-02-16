import React, { useState, useEffect } from "react";
import UserImg from "../../assets/standing-woman.png";

const ImageComponent = ({ isMobile, isSmallScreen }) => {
  return (
    <img
      src={UserImg}
      alt="Meeti Gandhi"
      style={{
        width: isMobile ? "500px" : "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        zIndex: 1, // Ensures image is behind text
      }}
    />
  );
};

const ImageCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQuerySmall = window.matchMedia("(max-width: 400px)");

    setIsMobile(mediaQueryMobile.matches);
    setIsSmallScreen(mediaQuerySmall.matches);

    const handleResize = () => {
      setIsMobile(mediaQueryMobile.matches);
      setIsSmallScreen(mediaQuerySmall.matches);
    };

    mediaQueryMobile.addEventListener("change", handleResize);
    mediaQuerySmall.addEventListener("change", handleResize);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleResize);
      mediaQuerySmall.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ImageComponent isMobile={isMobile} isSmallScreen={isSmallScreen} />
    </div>
  );
};

export default ImageCanvas;
