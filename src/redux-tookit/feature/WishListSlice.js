import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  wishLists: [],
};


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      const { wishLists } = state;



      const exists = wishLists.find((item) => item.id === action.payload.id);

      if (exists) {
        toast.error("Added to wishlist.")

      } else {

        const newWishLists = [...wishLists, action.payload];


        toast('Add wishlist Sucess !',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        return {
          ...state,
          wishLists: newWishLists,

        };
      }



    },
    deleWishList: (state, action) => {
      const { wishLists } = state;
      const delWish = wishLists.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        wishLists: delWish
      }
    }
  },
});

export const { addWishList, deleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
