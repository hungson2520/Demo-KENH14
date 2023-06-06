import React from "react";

import "../Style/Category.css";

function Category({
  title,
  imageSrc,
  imageAlt,
  category,
  description,
  description1,
}) {
  return (
    <div className="category">
      <h2>{category}</h2>
      <a href="#">
        <img src={imageSrc} alt={imageAlt} className="category-image" />
      </a>
      <h4>{title}</h4>
      <a href="#">
        <p>
          <strong>{description}</strong>
        </p>
      </a>
      <a href="#">
        <p>
          <strong>{description1}</strong>
        </p>
      </a>
    </div>
  );
}
export default Category;
