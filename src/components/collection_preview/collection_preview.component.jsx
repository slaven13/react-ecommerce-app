import React from "react";
import "./collection_preview.styles.scss";
import { CollectionItem } from "../collection_item/collection_item.component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherCollectionItemData }) => {
            return <CollectionItem key={id} {...otherCollectionItemData} />;
          })}
      </div>
    </div>
  );
};
