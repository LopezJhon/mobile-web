import React from 'react'

import {withRouter} from 'react-router-dom';

import CollectionItem from './collections-item/collections-items';

import './collection.scss';

function Collection({history, match, title, routeName, items}) {
    return (
        <div className='collection' >
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemsProps})=> (
                        <CollectionItem key={id} {...otherItemsProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(Collection);