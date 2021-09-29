import React from "react";
import { CollectionsOverview } from "../../components/collections_overview/collections_overview.component";
import { Route } from "react-router-dom";
import { CollectionPage } from "../collection/collection.component";
import {
  firebaseFirestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import * as shopActions from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import { WithSpinner } from "../../components/with_spinner/with_spinner.component";

const mapDispatchToProps = (dispatch) => {
  return {
    setCollections: (collections) =>
      dispatch(shopActions.setCollections(collections)),
  };
};

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  unsubsribeFromOnSnapshot = null;

  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const collectionRef = collection(firebaseFirestore, "collections");
    const { setCollections } = this.props;

    this.unsubsribeFromOnSnapshot = onSnapshot(collectionRef, {
      next: async (snapshot) => {
        const transformedCollections = convertCollectionSnapshotToMap(snapshot);

        setCollections(transformedCollections);
        this.setState({ isLoading: false });
      },
      error: (error) => console.log(error),
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromOnSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ShopPage);
