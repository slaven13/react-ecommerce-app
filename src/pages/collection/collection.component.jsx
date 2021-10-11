import React from "react";
import "./collection.styles.scss";
import { CollectionItem } from "../../components/collection_item/collection_item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
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
