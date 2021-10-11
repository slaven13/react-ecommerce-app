import React from "react";
import { useSelector } from "react-redux";
import "./collections_overview.styles.scss";
import { CollectionPreview } from "../collection_preview/collection_preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};
