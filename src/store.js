import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import sellerReducer from './screens/seller/sellerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    seller: sellerReducer,
  },
});
