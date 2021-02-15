import React from 'react'
import { connect } from 'react-redux';
import { addCartItem } from '../../../redux/cart/cart.actions'
import {Link} from 'react-router-dom';

import CustomButton from '../../custom-button/custom-button';

import './collections-item.scss';

function CollectionItem({item, title, addCartItem}) {
    console.log(item)
    const {id, imageUrl, name, price } = item;
    return (
        <div className='collection-item' >
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <CustomButton onClick={ () => addCartItem(item)}> Add Item </CustomButton>
            </div>
            <div className='collection-footer'>
                <span className='name'>
                    <Link className='title' to={`/shop/${title}/${id}`}>
                        {name}
                    </Link>
                </span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);