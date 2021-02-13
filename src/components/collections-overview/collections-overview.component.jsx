import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.style.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.length ? collections.map(({ id, ...otherCollectionProps }) =>
                (<CollectionPreview key={id} {...otherCollectionProps} />)
            ) : null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);