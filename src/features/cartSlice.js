import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const productIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (productIndex === -1) {
                // Add new item to cart
                state.cartItems.push({...action.payload, quantity: 1});
            } else {
                // Increment quantity if item already in cart
                state.cartItems[productIndex].quantity += 1;
            }
        },
        incrementQuantity: (state, action) => {
            const productIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (productIndex !== -1) {
                state.cartItems[productIndex].quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const productIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (productIndex !== -1 && state.cartItems[productIndex].quantity > 1) {
                state.cartItems[productIndex].quantity -= 1;
            } else if (productIndex !== -1 && state.cartItems[productIndex].quantity === 1) {
                // Remove item if quantity reaches 1 and decrement is attempted
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
