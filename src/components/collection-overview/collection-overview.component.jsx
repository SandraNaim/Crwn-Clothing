import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/preview-collection.component";

import './collection-overview.styles.scss';

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPreview);

    return(
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default CollectionsOverview;