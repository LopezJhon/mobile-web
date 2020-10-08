import React from 'react'

import SHOP_DATA from './shop.data';

import Collection from '../../component/collection/collection';

import './shoppage.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            collection: SHOP_DATA
        }
    }
    render(){
        const {collection} = this.state;
        return <div className="shop">
            {collection.map(({id, ...otherCollectionProps}) => (
                <Collection key={id} {...otherCollectionProps}/>
            ))}
        </div>  
    }
}

export default ShopPage;