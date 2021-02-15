import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectShopCollectionForPreview = createSelector(
    [selectShopCollection],
    shopItems => Object.keys(shopItems).map(key => shopItems[key])
);

export const selectShopCollectionSection = memoize((collectionUrlParam) => 
    createSelector(
        [selectShopCollection],
        shopItems => shopItems[collectionUrlParam]
    )
);