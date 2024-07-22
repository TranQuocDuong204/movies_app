import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import ItemWishList from "../components/wishListComponent/ItemWishList";
const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlistSlice.wishLists);
  console.log(wishlist);
  return (
    <div className="pt-16">
      <div className=" flex flex-row items-center justify-between    my-4 mx-2  rounded-lg max-md:flex-col">
        <h1 className=" text-2xl font-semibold pl-3">Wish List</h1>
      </div>

      <div className="w-full mx-auto px-1 ">
        <div className="grid grid-cols-[repeat(auto-fit,240px)]  gap-3 max-md:justify-center mx-2">
          {wishlist && wishlist.length ? (
            wishlist.map((item) => {
              return <ItemWishList dataItem={item} key={item.id} />;
            })
          ) : (
            <div>No WishList</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
