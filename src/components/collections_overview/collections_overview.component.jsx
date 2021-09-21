import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections_overview.styles.scss";
import { CollectionPreview } from "../collection_preview/collection_preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const CollectionsOverviewComponent = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export const CollectionsOverview = connect(mapStateToProps)(
  CollectionsOverviewComponent
);
