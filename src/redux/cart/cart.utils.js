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

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    let newCartItems = cartItems.filter(
        item => {
            console.log(item.id)
            console.log(cartItemToClear.id)
            return item.id !== cartItemToClear.id
        }
    );

    return newCartItems
}