import { cartActionTypes } from './cart.types'
import {addItemToCart, addItemQuantity, removeItemQuantity} from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case cartActionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items,action.payload)
            }
        case cartActionTypes.ADD_CART_ITEM_QUANTITY:
            return {
                ...state,
                items: addItemQuantity(state.items, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM_QUANTITY:
            return {
                ...state,
                items: removeItemQuantity(state.items, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return{
                ...state,
                items: state.items.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }    
        default:
            return state;
    }
};

export default cartReducer;