import React from "react";
import { Route } from "react-router-dom";
import * as shopActions from "../../redux/shop/shop.actions";
import { CollectionPageContainer } from "../collection/collection.container";
import { CollectionsOverviewContainer } from "../../components/collections_overview/collections_overview.container";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAndsetCollections: () =>
      dispatch(shopActions.fetchCollectionsStartAsync()),
  };
};
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchAndsetCollections } = this.props;

    fetchAndsetCollections();
  }

  render() {
    const { match } = this.props;

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
  }
}

export default connect(null, mapDispatchToProps)(ShopPage);
