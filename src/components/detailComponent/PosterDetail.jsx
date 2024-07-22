import React from "react";

const PosterDetail = ({ dataDetail }) => {
  return (
    <>
      {" "}
      <div className="w-full h-full">
        <img
          src={`https://media.themoviedb.org/t/p/original/${dataDetail.poster_path}`}
          className="h-full w-full object-cover"
          alt="Movie Poster"
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
    </>
  );
};

export default PosterDetail;
