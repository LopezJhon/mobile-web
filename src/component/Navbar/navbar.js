import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { createStructuredSelector} from 'reselect';

import {cartToggle} from '../../redux/cart/cart.actions';

import CardDropdown from '../card-dropdown/card-dropdown';
import './navbar.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

function Navbar({currentUser, hidden, cartToggle}) {
    return(
        <div className='navbar'>
            <div className='shop'>
                <Link className='item' to="/shop">Shop</Link>
            </div>
            <div className='logo'>
                <Link to="/">Logo</Link>
            </div>
            <div className='content'>
               { 
                   currentUser ? 
                   <div className='item' onClick={()=> auth.signOut()}> Sign Out</div> : 
                   <Link className='item' to='/login'>Sign In</Link>
                }
               <div className='item' onClick={ () => cartToggle() } >Cart</div>
            </div>
            {
                hidden ?
                null :
                <CardDropdown/>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);