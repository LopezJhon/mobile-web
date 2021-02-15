import React from 'react'

import {Link, withRouter} from 'react-router-dom';

import CollectionItem from '../collections-item/collections-items';

import './collection-preview.scss';

function CollectionPreview({ match, title, backGround, color,  routeName, items}) {
    const contentBG = {
        backgroundImage: 'url(' + backGround + ')',
    };
    const contentColor = {
        color: '#' + color,
        borderColor: '#' + color
    }
    return (
        <div className='collection' >
            <div className='container' style={contentBG}>
                <Link className='title' style={contentColor} to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link>
            </div>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} title={routeName}/>
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);