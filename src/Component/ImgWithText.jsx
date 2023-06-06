import React from "react";
import "../Style/ImgWithText.css";
function ImgWithText(props) {
  return (
    <div className="img-with-text" style={{ marginLeft: "150px" }}>
      <img src={props.imgSrc} alt={props.imgAlt} width="250" height="156" />
      <p style={{ margin: 0 }}>
        <strong>{props.text}</strong>
      </p>
    </div>
  );
}

export default ImgWithText;
