import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collection-overview.component"

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

// the use of the compose is to organize the wrapping of the container
// compose work from right to left

// the above code is the same as:
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))


export default CollectionsOverviewContainer;