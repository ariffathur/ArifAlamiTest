import { configureStore } from '@reduxjs/toolkit';
import sellerReducer from './screens/seller/sellerSlice';
import productReducer from './screens/product/productSlice';

export const store = configureStore({
  reducer: {
    seller: sellerReducer,
    product: productReducer,
  },
});
