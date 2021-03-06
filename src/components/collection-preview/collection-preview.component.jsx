import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-preview.style.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items, ...props }) => {
    const { routeName, history, match } = props;
    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={() => history.push(`${match.url}/${routeName}`)}>
                {title}
            </h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4).map((item) =>
                    (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);