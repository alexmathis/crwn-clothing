import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../compnents/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = () => {
  const { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };

  export default CollectionPage;