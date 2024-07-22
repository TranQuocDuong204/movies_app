import React, { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CategoryIcon from "@mui/icons-material/Category";
import PlayVideo from "./PlayVideo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWishList } from "../../redux-tookit/feature/WishListSlice";
import { useSelector } from "react-redux";
const BoxTwoDetail = ({ dataDetail }) => {
  const { id } = useParams();
  const [playVideoId, setPlayVideoId] = useState("");
  const [isCheckWish, setIsCheckWish] = useState(false);
  const wishlist = useSelector((state) => state.wishlistSlice.wishLists);
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = wishlist.some((item) => item.id === dataDetail.id);
    setIsCheckWish(exist);
  }, [wishlist, dataDetail.id]);
  const handlePlayId = (id) => {
    setPlayVideoId(id);
  };

  const handelAddWishList = () => {
    dispatch(addWishList({ ...dataDetail, checkList: true }));
  };

  return (
    <div className="basis-3/4 bg-slate-200 bg-opacity-15 rounded-xl  max-lg:p-4 max-lg:mb-6">
      {/* --------------- */}
      <div className=" flex flex-col ">
        <h2 className=" flex items-center font-bold text-4xl text-white px-3 py-2">
          {dataDetail.title} ({dataDetail?.release_date?.slice(0, 4)})
        </h2>
        <div className="flex items-center gap-1 flex-wrap max-sm:flex-col max-sm:items-start max-sm:gap-1">
          <span className=" flex items-center gap-1 text-white px-3 py-">
            {" "}
            <CalendarMonthIcon />
            {dataDetail.release_date}
          </span>
          <span className="flex items-center gap-1 relative px-3 py-2 text-white max-lg:flex-wrap">
            <CategoryIcon />
            {dataDetail?.genres?.map((item) => (
              <a href="#" key={item.id}>
                {item.name}
              </a>
            ))}
          </span>

          <span className="relative px-3 py-2 text-white flex items-center gap-1">
            <AccessAlarmIcon />
            {dataDetail.runtime} minute
          </span>
        </div>
        {/* ------------------------------------------- */}
        <div className=" flex px-3 py-2 items-center gap-4 max-lg:flex-wrap max-lg:justify-start">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer active:scale-50 transition-all">
            <MenuIcon
              sx={{
                color: "black",
              }}
            />
          </div>
          <div
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer active:scale-50 transition-all"
            onClick={handelAddWishList}
          >
            <FavoriteBorderIcon
              sx={{
               color: isCheckWish ? "red": "black"
              }}
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer active:scale-50 transition-all">
            <BookmarkBorderIcon
              sx={{
                color: "black",
              }}
            />
          </div>

          <Button
            variant=""
            size="large"
            sx={{
              color: "white",
              background: "black",
            }}
            onClick={() => handlePlayId(id)}
          >
            <PlayArrowIcon />
            <PlayVideo dataId={playVideoId} />
          </Button>
        </div>

        {/* --------- */}

        <div className="px-3">
          <h2 className=" text-xl font-bold py-2 text-white">Overview</h2>
          <h3 className="text-white">{dataDetail.overview}</h3>
        </div>
        {/* --------------- */}
        <div className=" flex items-center gap-2 px-3 py-2  flex-wrap">
          <h2 className=" text-white text-xl font-bold">Language: </h2>
          {dataDetail?.spoken_languages?.map((item, index) => (
            <p key={index} className=" text-white ">
              {item.name}
            </p>
          ))}
        </div>

        {/* -----------------================================================= */}
      </div>
    </div>
  );
};

export default BoxTwoDetail;
