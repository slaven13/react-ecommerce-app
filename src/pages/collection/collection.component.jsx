import React from "react";
import "./collection.styles.scss";
import { CollectionItem } from "../../components/collection_item/collection_item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageComponent = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="collection-items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export const CollectionPage = connect(mapStateToProps)(CollectionPageComponent);
