import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Client from 'shopify-buy';

console.log(process.env.SHOPIFY_DOMAIN)

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN
})

export const fetchMerch = createAsyncThunk('merch/fetchMerch', async () => {
  const response = await client.product.fetchAll()

  console.log(typeof response)
  console.log(response)

  return response.toArray()
})

export const merchandiseSlice = createSlice({
  name: 'merchandise',
  initialState: {
    merch: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchMerch.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMerch.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.merch = state.merch.concat(action.payload)
    },
    [fetchMerch.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export default merchandiseSlice.reducer;
