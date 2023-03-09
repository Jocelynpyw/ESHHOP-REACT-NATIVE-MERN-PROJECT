import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    deleteToCart: (state, action) => {
      return state.filter(item => item?.item._id !== action.payload);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const {addToCart, deleteToCart, clearCart} = counterSlice.actions;

export default counterSlice.reducer;
