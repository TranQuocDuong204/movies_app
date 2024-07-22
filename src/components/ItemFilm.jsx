import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import moment from "moment";
import { Link } from "react-router-dom";
const ItemFilm = ({ dataItem }) => {
  return (
    <Link to={`/movies/${dataItem.id}`}>
      <div className="w-full max-w-[230px] min-w-[230px] relative h-80 overflow-hidden block bg-slate-50 cursor-pointer rounded-xl group mb-3 hover:scale-95 duration-500 overflow-hidden">
        <img
          src={`https://media.themoviedb.org/t/p/original/${dataItem.poster_path}`}
          alt=""
          className="w-full h-full rounded-xl transition-opacity duration-300  group-hover:opacity-50 "
        />
        <div className="absolute w-full bottom-0 bg-slate-500 h-16 p-2 bg-opacity-80 rounded-b-xl">
          <h1 className="text-ellipsis line-clamp-1 text-lg font-semibold text-white">
            {dataItem.title}
          </h1>
          <div className=" flex items-center justify-between">
            {" "}
            <h2 className="text-white">
              {moment(dataItem.release_date).format("MMM Do YY")}
            </h2>
            <p>Rating: {dataItem?.vote_average?.toFixed(1)}</p>
          </div>
        </div>
        <div className="absolute top-[120px] left-[80px] mx-auto opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <PlayCircleIcon
            sx={{
              fontSize: 55,
              color: "red",
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default ItemFilm;
