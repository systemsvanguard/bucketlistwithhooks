// src/components/layout/SiteHeader.js 
import React, { useEffect, useRef } from "react";

const SiteHeader = (props) => {
  const headerStyle = {
    backgroundColor: "#00008b",
    color: "#ffffff",
    padding: "8px 12px",
  };

  const isInitialMount = useRef(true);
  console.log(isInitialMount);

  useEffect(() => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      document.getElementById("heading01").innerHTML = "clicked";
      document.getElementById("heading01").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan]);

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", lineHeight: "1.447em", margin: "0px" }}>
        My Bucket List App <span id="heading01"></span>
      </h1>
    </header>
  );
};

export default SiteHeader; 