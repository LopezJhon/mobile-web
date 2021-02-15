import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionForPreview } from '../../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview';

function CollectionOverview({shopItems}) {
    console.log(shopItems)
    return (
        <div className='collection-overview'>
            {shopItems.map( 
                ({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            )};
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    shopItems: selectShopCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);