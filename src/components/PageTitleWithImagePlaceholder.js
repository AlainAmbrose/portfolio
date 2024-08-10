import React, { useState, useEffect } from "react";

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
            width: "250px",
            height: "50px",
          }}
        ></div>
      )}
      <img
        src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=ffffff&random=false&width=250&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
        alt="Typing SVG"
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <h1> Alain Ambrose </h1>
    </div>
  );
};

export default PageTitleWithImagePlaceholder;
