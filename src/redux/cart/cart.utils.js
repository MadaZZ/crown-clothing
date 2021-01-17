export const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemExists = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    if (itemExists) {
        return cartItems.map(
            item => {
                if (item.id === cartItemToAdd.id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const itemExists = cartItems.find(
        item => item.id === cartItemToRemove.id
    );

    if (itemExists.quantity === 1) {
        let newCartItems = cartItems.filter(
            item => {
                return item.id !== cartItemToRemove.id
            }
        );
        return newCartItems
    }

    return cartItems.map(
        item => {
            if (item.id === cartItemToRemove.id) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
        })
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    let newCartItems = cartItems.filter(
        item => {
            return item.id !== cartItemToClear.id
        }
    );

    return newCartItems
}