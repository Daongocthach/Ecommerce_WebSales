const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const cartItem = action.payload
            return {
                ...state,
                cartItems: [...state.cartItems, cartItem],
                quantity: state.quantity + 1,
                total: state.total + cartItem?.price
            }
        }
        case 'UPDATE_QUANTITY': {
            const updatedCartItem = action.payload;
            const updatedList = state.cartItems.map((cartItem) =>
                cartItem.id === updatedCartItem.id ? updatedCartItem : cartItem
            );
            const updatedTotal = updatedList.reduce(
                (total, cartItem) =>
                    total + cartItem.product.price * cartItem.quantity,
                0
            );
            return {
                ...state,
                cartItems: updatedList,
                total: updatedTotal
            };
        }
        case 'REMOVE_CART': {
            const removedCartItem = action.payload
            const updatedList = state.cartItems.filter(
                (cartItem) => cartItem.id.customerId !== removedCartItem.customerId && cartItem.id.productId !== removedCartItem.productId
            )
            const updatedTotal = updatedList.reduce(
                (total, cartItem) =>
                    total + cartItem.product.price * cartItem.quantity,
                0
            );
            return {
                ...state,
                cartItems: updatedList,
                total: updatedTotal
            };
        }
        case 'SET_CART': {
            const cartItems = action.payload;
            const quantity = cartItems.reduce(
                (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
                0
            );
            const total = cartItems.reduce(
                (totalPrice, cartItem) =>
                    totalPrice + cartItem.product.price * cartItem.quantity,
                0
            );
            return {
                ...state,
                cartItems: cartItems,
                quantity: quantity,
                total: total
            };
        }
        default:
            return state
    }
}

export default cartReducer
