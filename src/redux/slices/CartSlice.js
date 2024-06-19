import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
  name: "cart",
  initialState:{
    cart:[],
  },
  reducers:{
    add: (state,action)=> {
      const existingItem = state.cart.find((item)=> item.id === action.payload.id); // it returns id if condition is true
      if(existingItem) {
       state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty : item.qty + 1} : item)
      } else {
        state.cart.push(action.payload);
      }
   },
    removeFromCart: (state, action) => {
       state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
    },
    increament: (state,action) => {
       state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,qty : item.qty + 1} : item)
    },
    decreament: (state,action) => {
      state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,qty : item.qty - 1} : item)
    },

  }
});
export const {add, removeFromCart, increament, decreament}=CartSlice.actions;
export default CartSlice.reducer;
