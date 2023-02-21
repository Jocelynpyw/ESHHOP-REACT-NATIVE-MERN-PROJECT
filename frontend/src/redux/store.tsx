import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      // users: UserReducer,
      // posts: postsReducers,
    },
  },
  // applyMiddleware(...middlewares),
);

export default store;
