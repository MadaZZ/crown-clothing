export const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemExists = cartItems.find(
        item => item.id === cartItemToAdd.id
        );

    if (itemExists) {
        return cartItems.map(
            item => {
                if (item.id === cartItemToAdd.id) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            })
        }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}