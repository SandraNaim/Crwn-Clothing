import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SHOP_DATA from "../../redux/shop/shop.data";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => (
    <div className="shop-page">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)