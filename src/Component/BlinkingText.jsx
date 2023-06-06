import React, { useEffect, useRef } from "react";

function BlinkingText({ title }) {
  const textRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const textElement = textRef.current;

      if (textElement.style.color === "black") {
        textElement.style.color = "yellow";
      } else {
        textElement.style.color = "black";
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h2 style={{ marginLeft: "450px", marginBottom: "-50px" }} ref={textRef}>
      {title}
    </h2>
  );
}

export default BlinkingText;
