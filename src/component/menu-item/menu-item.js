import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

function MenuItem({category, linkUrl, backGround, color, history, match}) {
    const contentBG = {
        backgroundImage: 'url(' + backGround + ')',
    };
    const contentColor = {
        color: '#' + color,
        borderColor: '#' + color
    }
    return (
        <div className='menu-item' style={contentBG} onClick={()=> history.push(`${match.url}shop/${linkUrl}`)}>
            <div className='content' style={contentColor}>
                <h1 className='title'>{category.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);