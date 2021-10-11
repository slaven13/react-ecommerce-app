import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import * as shopActions from "../../redux/shop/shop.actions";
import { CollectionPageContainer } from "../collection/collection.container";
import { CollectionsOverviewContainer } from "../../components/collections_overview/collections_overview.container";
import { useDispatch } from "react-redux";

export const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopActions.fetchCollectionsStart());
  }, [dispatch]);

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
