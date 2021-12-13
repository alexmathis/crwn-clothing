import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../compnents/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';


const CollectionPage = () => {
  const { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));
    const { title, items } = collection;
    return (
         <CollectionPageContainer>
          <CollectionTitle>{title}</CollectionTitle>
          <CollectionItemsContainer>
            {items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </CollectionItemsContainer>
        </CollectionPageContainer>
    );
  };

  export default CollectionPage;