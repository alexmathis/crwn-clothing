import React from 'react';
import {useSelector} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview-component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { CollectionsOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionForPreview)
    return (
        <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </CollectionsOverviewContainer>
    )
};

export default CollectionsOverview;