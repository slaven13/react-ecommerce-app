import React from "react";
import "./menu_item.styles.scss";

export const MenuItem = ({ id, title, imageUrl, linkUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl}`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="link" onClick={() => {}}><span className="subtitle">SHOP NOW</span></div>
      </div>
    </div>
  );
};
