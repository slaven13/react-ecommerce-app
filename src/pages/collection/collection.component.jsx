import React from "react";
import "./collection.styles.scss";
import { CollectionItem } from "../../components/collection_item/collection_item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

export const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
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
