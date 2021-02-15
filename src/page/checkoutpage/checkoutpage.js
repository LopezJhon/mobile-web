import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'

import CheckoutItem from '../../component/checkout-item/checkout-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkoutpage.scss';

function CheckoutPage({items}) {
    return (
        <div className='checkout-page'>
            <div className='container'>
                <div className="title"> Welcome to Checkout </div>
            </div>
            {
                items.map( item => <CheckoutItem key={item.id} item={item}/> )
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    items: selectCartItems
})
export default connect(mapStateToProps)(CheckoutPage);