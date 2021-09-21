import React from "react";
import { MenuItem } from "../menu_item/menu_item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const DirectoryComponent = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Directory = connect(mapStateToProps)(DirectoryComponent);
