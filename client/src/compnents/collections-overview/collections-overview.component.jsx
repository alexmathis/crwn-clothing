import React from 'react';
import {useSelector} from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview-component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';


const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionForPreview)
    return (
        <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </div>
    )
};

export default CollectionsOverview;