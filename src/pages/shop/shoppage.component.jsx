import React from "react";
import { CollectionsOverview } from "../../components/collections_overview/collections_overview.component";
import { Route } from "react-router-dom";
import { CollectionPage } from "../collection/collection.component";

export const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
