import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return(
        <div className='navbar'>
            <div className='shop'>
                <Link className='item' to="/mens">Men</Link>
                <Link className='item' to="/womans">Woman</Link>
                <button className='item' >Search</button>
            </div>
            <div className='logo'>
                <Link to="/">Logo</Link>
            </div>
            <div className='content'>
               <span>English</span>
               <span>Login</span>
               <span>Wish List</span>
            </div>
        </div>
    )
}

export default Navbar;