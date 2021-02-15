import React from 'react';

import './cart-dropdown-item.scss'

function CardDropdownItem ({item: {name, price, imageUrl, quantity}}) {
    return(
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CardDropdownItem;