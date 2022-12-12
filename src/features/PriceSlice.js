import { createSlice } from '@reduxjs/toolkit';


export const priceSlice = createSlice({
  name: 'price',
  initialState: {
    value: 0,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPrice: (state, action) =>{
        state.price = action.payload;
    },
  },
});

export const { setPrice } = priceSlice.actions;


export const selectUser = (state) => state.price.price;


export default priceSlice.reducer;