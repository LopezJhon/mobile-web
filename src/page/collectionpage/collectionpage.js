import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPageSections from './collectionpagesections/collectionpagesections';
import CollectionPageItem from './collectionpageitem/collectionpageitem';

import './collectionpage.scss';

function CollectionPage({match}) {
    
    return(
        <div className='collection-page'>
            <Route exact path={`${match.path}`} component={CollectionPageSections} />
            <Route path={`${match.path}/:itemId`} component={CollectionPageItem}/>
        </div>
    )
}

export default CollectionPage;