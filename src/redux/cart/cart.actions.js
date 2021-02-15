import { cartActionTypes } from './cart.types';

export const cartToggle = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN
});

export const addCartItem = items => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: items
});

export const addCartItemQuantity = items => ({
    type: cartActionTypes.ADD_CART_ITEM_QUANTITY,
    payload: items
});

export const removeCartItemQuantity = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM_QUANTITY,
    payload: item
})
export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})