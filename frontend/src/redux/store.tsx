import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      cart: cartReducer,
      // users: UserReducer,
      // posts: postsReducers,
    },
  },
  // applyMiddleware(...middlewares),
);

export default store;
