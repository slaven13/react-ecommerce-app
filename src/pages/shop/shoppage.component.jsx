import React from "react";
import { CollectionsOverview } from "../../components/collections_overview/collections_overview.component";
import { Route } from "react-router-dom";
import { CollectionPage } from "../collection/collection.component";
import * as shopActions from "../../redux/shop/shop.actions";
import {
  selectIsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { WithSpinner } from "../../components/with_spinner/with_spinner.component";
import { createStructuredSelector } from "reselect";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAndsetCollections: () =>
      dispatch(shopActions.fetchCollectionsStartAsync()),
  };
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchAndsetCollections } = this.props;

    fetchAndsetCollections();

    // 1. Promise pattern
    // getDocsFromServer(collectionRef).then((snapshot) => {
    //   const transformedCollections = convertCollectionSnapshotToMap(snapshot);

    //   setCollections(transformedCollections);
    //   this.setState({ isLoading: false });
    // });

    // 2. Promise with native fetch and firebase rest api
    // const projectId = "react-ecommerce-app-sa";
    // const firebaseRestBaseUri = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/collections`;

    // fetch(firebaseRestBaseUri)
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    //3. Observable pattern
    // this.unsubsribeFromOnSnapshot = onSnapshot(collectionRef, {
    //   next: async (snapshot) => {
    //     const transformedCollections = convertCollectionSnapshotToMap(snapshot);

    //     setCollections(transformedCollections);
    //     this.setState({ isLoading: false });
    //   },
    //   error: (error) => console.log(error),
    // });
  }

  render() {
    const { match, isFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
