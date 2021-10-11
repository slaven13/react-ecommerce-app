import React from "react";
import { MenuItem } from "../menu_item/menu_item.component";
import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { useSelector } from "react-redux";

export const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};
