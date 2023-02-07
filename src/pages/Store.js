import { configureStore, createSlice } from "@reduxjs/toolkit";


const pick = createSlice({
  name: 'pick',
  initialState: [],
  reducers: {
    delDaily(state, action){
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    },
    addDaily(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if(index>-1) {
        state[index].count++
      } else {
        state.push(action.payload);
      }
    }
  }
})


export const {delDaily, addDaily} = pick.actions

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      if(state[index].price > 0 && state[index].count < 5) {
      state[index].count++
    } else {
      alert('추가할 수 없습니다.');
    }
    },
    subCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      if(state[index].count > 1){
        state[index].count--
      }
    },
    delItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    },
    addItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if(index>-1) {
        state[index].count++
        if(state[index].price <= 0){
          alert('해당 상품은 더 이상 담을 수 없습니다.');
          state[index].count = 1;
        } else if (state[index].count > 4) {
          alert('해당 상품은 더 이상 담을 수 없습니다.');
        }
      } else {
        state.push(action.payload);
      }
    }
  }
})

export const {addCount, subCount, delItem, addItem} = cart.actions

export default configureStore({
  reducer: {
    cart: cart.reducer,
    pick: pick.reducer
  }
})