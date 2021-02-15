import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button';
import CardDropdownItem from './card-dropdown-item/card-dropdown-item'
import {cartToggle} from '../../redux/cart/cart.actions';

import './card-dropdown.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

function CardDropdown ({items, cartToggle}) {

    function pushCheckout () {
        cartToggle();
    }
    return(
        <div className='card-dropdown'>
            <div className='cart-items'>
                {items.map( item => (
                    <CardDropdownItem key={item.id} item={item}/>
                ))}
            </div>
            <Link to='/checkout'>
                <CustomButton onClick={pushCheckout}>Checkout</CustomButton>
            </Link>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
})
const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDropdown);