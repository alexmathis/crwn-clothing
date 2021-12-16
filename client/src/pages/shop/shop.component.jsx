import React, { useEffect, lazy, Suspense} from 'react';
import { Route } from 'react-router';
import {useDispatch} from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../compnents/spinner/spinner.component';
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));
const CollectionOverviewContainer = lazy(() => import("../../compnents/collections-overview/collections-overview.container"));


const ShopPage = ({ match}) => {

    const dispatch = useDispatch();
    useEffect(() => {  dispatch(fetchCollectionsStart()) }, [dispatch]);
    return ( 
        <div className="shop-page">
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={ CollectionOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`} component={ CollectionPageContainer}/>
            </Suspense>
        </div>)
};

export default ShopPage;