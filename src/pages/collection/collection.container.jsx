import { WithSpinner } from "../../components/with_spinner/with_spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPage } from "./collection.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
