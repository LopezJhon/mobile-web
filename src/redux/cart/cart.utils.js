export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
        
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const addItemQuantity = (cartItems, cartItemToAddQuantity) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAddQuantity.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAddQuantity.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }
    
    return [...cartItems];
}
export const removeItemQuantity = (cartItems, cartItemToRemoveQuantity) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemoveQuantity.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemoveQuantity.id
        )
    }
    return cartItems.map(
        cartItem => 
            cartItem.id === cartItemToRemoveQuantity.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
    );
}