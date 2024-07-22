import React, { useEffect, useState, useRef } from "react";

import ItemFilm from "./ItemFilm";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const FilmCard = ({ data = [], heading }) => {

  const contaierRef = useRef();

  const handleNext = () => {
    contaierRef.current.scrollLeft += 400;
  };
  const handlePrevious = () => {
    contaierRef.current.scrollLeft -= 400;
  };

  return (
    <div className=" container mx-auto px-3 my-10">
      <h2 className=" text-2xl font-semibold text-white py-3">{heading}</h2>

      <div className=" relative">
        <div
          ref={contaierRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all no-scrollbar"
        >
          {data.map((item) => (
            <ItemFilm dataItem={item} key={item.id} />
          ))}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-black p-1 text-white bg-opacity-40 rounded-full -ml-2 z-10 flex items-center justify-center"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={handleNext}
            className="bg-black p-1 text-white bg-opacity-40 rounded-full -mr-2 z-10 flex items-center justify-center"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
