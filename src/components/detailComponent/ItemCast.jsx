import React from "react";

const ItemCast = ({ dataItemCast }) => {
  return (
    <div className="w-full max-w-[230px] min-w-[230px] relative h-80 overflow-hidden block bg-slate-50 cursor-pointer rounded-xl group mb-3 hover:scale-95 duration-500 overflow-hidden ">
      <img
        src={`https://media.themoviedb.org/t/p/original/${dataItemCast.profile_path}`}
        alt=""
        className="w-full h-full rounded-xl transition-opacity duration-300  group-hover:opacity-50 "
      />
      <div className="absolute w-full bottom-0 bg-black h-16 p-2 bg-opacity-80 rounded-b-xl">
        <h1 className="text-ellipsis line-clamp-1 text-lg font-semibold text-white flex justify-center items-center">
          {dataItemCast.name}
        </h1>
        
      </div>
    </div>
  );
};

export default ItemCast;
