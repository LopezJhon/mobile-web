import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './navbar.scss';

function Navbar({currentUser}) {
    return(
        <div className='navbar'>
            <div className='shop'>
                <Link className='item' to="/shop">Shop</Link>
                <Link className='item' to="/mens">Men</Link>
                <Link className='item' to="/womans">Woman</Link>
                <button className='item' >Search</button>
            </div>
            <div className='logo'>
                <Link to="/">Logo</Link>
            </div>
            <div className='content'>
               <span>English</span>
               { currentUser ? <div className='item' onClick={()=> auth.signOut()}> Sign Out</div> : <Link className='item' to='/login'>Sign In</Link>}
               <span>Wish List</span>
            </div>
        </div>
    )
}

export default Navbar;