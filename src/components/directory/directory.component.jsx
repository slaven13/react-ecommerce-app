import React from "react";
import { MenuItem } from "../menu_item/menu_item.component";
import "./directory.styles.scss";
import { sections } from "../../data/directory.data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, linkUrl, size }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              linkUrl={linkUrl}
              size={size}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
