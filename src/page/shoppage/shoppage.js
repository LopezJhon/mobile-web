import React from 'react'
import { Route } from 'react-router-dom';

import CollectionOverview from '../../component/collection/collection-overview/collection-overview';
import CollectionPage from '../collectionpage/collectionpage';

import './shoppage.scss';
function ShopPage({match}) {
    return (
        <div className="shop">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div> 
    )     
}

export default ShopPage;