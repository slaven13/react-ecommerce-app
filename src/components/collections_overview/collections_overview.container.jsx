import { WithSpinner } from "../with_spinner/with_spinner.component";
import { CollectionsOverview } from "./collections_overview.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
