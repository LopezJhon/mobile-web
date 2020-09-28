import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

function MenuItem({category, linkUrl, history, match}) {
    return (
        <div className='menu-item' onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className='content'>
                <h1 className='title'>{category.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);