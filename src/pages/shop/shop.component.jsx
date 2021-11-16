import React from 'react';
import CollectionsOverview from '../../compnents/collections-overview/collections-overview.component'; 
import { Route } from 'react-router';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
);

export default (ShopPage);