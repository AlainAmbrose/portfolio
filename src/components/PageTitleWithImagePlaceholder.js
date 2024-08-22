import React, { useState } from "react";

const PageTitleWithImagePlaceholder = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ flex: "0 0 10%" }}>
      {!imageLoaded && (
        <div
          style={{
            width: "25vh",
            height: "5vh",
          }}
        ></div>
      )}
      <img
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&pause=1000&color=A8E9AB&width=300&lines=Hi%2C+I'm;Hola%2C+soy;%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C+%E0%A4%85%E0%A4%B9%E0%A4%AE%E0%A5%8D;Bonjour%2C+je+suis;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF;Hallo%2C+ich+bin+"
        alt="Typing SVG"
        onLoad={handleImageLoad}
        style={{
          display: imageLoaded ? "block" : "none",
          width: "25vh",
          height: "5vh",
        }}
      />
      <h1> Alain Ambrose </h1>
    </div>
  );
};

export default PageTitleWithImagePlaceholder;
