import React from "react";
import "./menu_item.styles.scss";
import { withRouter } from "react-router";

const MenuItemComponent = ({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match,
}) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl}`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export const MenuItem = withRouter(MenuItemComponent);
