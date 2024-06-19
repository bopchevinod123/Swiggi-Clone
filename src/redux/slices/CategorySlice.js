import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
    rating: null,
  },
  reducers: {
   setCategory: (state, action) => {
    state.category = action.payload;
   },
   setRating: (state, action) => {
    state.rating = action.payload;
   }
  },
});

export const {setCategory,setRating} = CategorySlice.actions;
export default CategorySlice.reducer;  
