import React from "react";

const BoxOneDetail = ({ dataDetail }) => {
  return (
    <div className="basis-1/4 max-lg:py-3 flex max-lg:justify-center justify-end">
      <img
        src={`https://media.themoviedb.org/t/p/original/${dataDetail.poster_path}`}
        className="w-[260px] object-cover rounded"
        alt="Movie Poster"
      />
    </div>
  );
};

export default BoxOneDetail;
