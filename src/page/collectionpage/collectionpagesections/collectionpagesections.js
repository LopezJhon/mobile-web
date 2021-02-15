import React from 'react';
import { connect } from 'react-redux';

import {selectShopCollectionSection} from '../../../redux/shop/shop.selectors';
import CollectionItem from '../../../component/collection/collections-item/collections-items';

import './collectionpagesections.scss';

function CollectionPageSections({collection, match}) {
    const { items, title, backGround, color} = collection;
    const contentBG = {
        backgroundImage: 'url(' + backGround + ')',
    };
    const contentColor = {
        color: '#' + color,
        borderColor: '#' + color
    }
    return(
        <div className='collection-page'>
            <div className='collection-container'>
                <div className='container' style={contentBG}>
                    <div className='title' style={contentColor}>{title}</div>
                </div>
                <div className='display'>
                    {items.map( item => <CollectionItem key={item.id} item={item} title={title} />)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollectionSection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPageSections);