import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const cartItemIndex = state.findIndex(
        item => item.item._id === action.payload.item._id,
      );

      if (cartItemIndex >= 0) {
        state[cartItemIndex].quantity += 1;
      } else {
        const tempProduct = {...action.payload, quantity: 1};
        state.push(tempProduct);
      }
    },
    deleteToCart: (state, action) => {
      return state.filter(item => item?.item._id !== action.payload.item._id);
    },
    clearCart: (state, action) => {
      return [];
    },
    getTotal(state) {
      let {total, quantity} = state.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );

      state.totalQuantity = quantity;
      state.totalAmount = total;
    },

    decreaseCartQuantity(state, action) {
      const itemIndex = state.findIndex(
        cartItem => cartItem.item._id === action.payload.item._id,
      );

      if (state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      } else if (state[itemIndex].quantity === 1) {
        return state.filter(item => item?.item._id !== action.payload.item._id);

        // const inCartItems = state.filter(
        //   cartItem => cartItem.item._id !== action.payload.id,
        // );
        // state = inCartItems;
      }
      // localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  clearCart,
  getTotal,
  decreaseCartQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
