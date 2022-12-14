import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alamiService } from '../../services/alamiService';

export const addSeller = createAsyncThunk('seller/add', async (payload) => {
  const response = await alamiService.postSeller(payload);
  return response.data;
});

export const sellerSlice = createSlice({
  name: 'seller',
  initialState: { seller: {}, loading: false },
  reducers: {
    resetSeller(state) {
      state.seller = {};
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addSeller.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSeller.fulfilled, (state, action) => {
      state.loading = false;
      state.seller = action.payload;
    });
  },
});

export const { resetSeller } = sellerSlice.actions;
export default sellerSlice.reducer;
