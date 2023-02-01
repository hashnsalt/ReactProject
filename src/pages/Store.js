import { configureStore, createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
  name: 'cart',
  initialState: [{id:'g_00', name:'dnjfdnjf', count: 1}],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state[index].count++  
    }
  }
})

export const {addCount} = cart.actions

export default configureStore({
  reducer: {
    cart: cart.reducer
  }
})