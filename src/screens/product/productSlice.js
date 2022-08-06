import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alamiService } from '../../services/alamiService';

export const addProduct = createAsyncThunk('product/add', async (payload) => {
  const response = await alamiService.postProduct(payload);
  return response.data;
});

export const fetchProductBySellerId = createAsyncThunk('product/fetch-by-id', async (sellerId) => {
  const response = await alamiService.fetchProduct(sellerId);
  return response.data;
});

export const fetchProductByKeyword = createAsyncThunk(
  'product/fetch-by-keyword',
  async (keyword) => {
    const response = await alamiService.fetchProductByKeyword(keyword);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: { product: {}, products: [], loading: false },
  reducers: {
    resetProduct(state) {
      state.products = [];
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductByKeyword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductByKeyword.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
    });
    builder.addCase(fetchProductBySellerId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductBySellerId.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
    });
  },
});

export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;
