import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import wishlistSlice from "./feature/WishListSlice"
const reducer = combineReducers(
  {
    wishlistSlice
  }
)
const store = configureStore({
  reducer
});

export default store;
