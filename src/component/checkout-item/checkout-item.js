import React from 'react';
import { connect } from 'react-redux';
import { addCartItemQuantity, removeCartItem, removeCartItemQuantity } from '../../redux/cart/cart.actions';

import './checkout-item.scss';
function CheckoutItem({item, addCartItemQuantity, removeCartItemQuantity, removeCartItem}) {
    const {name, quantity, price, imageUrl} = item;

    return (
        <div className='checkout-item'>
            <div 
                className='image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='right' onClick={() => addCartItemQuantity(item)}>&#10095;</div>
                {quantity}
                <div className='left' onClick={() => removeCartItemQuantity(item)}>&#10094;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-item'onClick={()=> removeCartItem(item) }>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItemQuantity: item => dispatch(addCartItemQuantity(item)),
    removeCartItemQuantity: item => dispatch(removeCartItemQuantity(item)),
    removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);