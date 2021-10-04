import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import * as shopActions from "../../redux/shop/shop.actions";
import { CollectionPageContainer } from "../collection/collection.container";
import { CollectionsOverviewContainer } from "../../components/collections_overview/collections_overview.container";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAndsetCollections: () => dispatch(shopActions.fetchCollectionsStart()),
  };
};

const ShopPageComponent = ({ fetchAndsetCollections, match }) => {
  useEffect(() => {
    fetchAndsetCollections();
  }, [fetchAndsetCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageComponent);
