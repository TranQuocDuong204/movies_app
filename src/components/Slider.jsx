import React from "react";
import videos from "../assets/video/video2.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";

const Slider = () => {
  const Sileup = (delay) => {
    return {
      initial: {
        y: "100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };
  return (
    <div className="w-full h-full">
      <div className="flex min-h-full max-h-[75vh] overflow-hidden">
        <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all">
          <div className="w-full h-full">
            <video
              src={videos}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className=" container mx-auto absolute bottom-10 left-28 max-w-md">
            <motion.h2
              variants={Sileup(0.6)}
              initial="initial"
              whileInView="animate"
              className="font-bold  text-3xl drop-shadow-2xl text-white py-3 uppercase   flex max-sm:text-lg max-xs:m-auto"
            >
              Xem phim không giới hạn.
            </motion.h2>
            <motion.button
              variants={Sileup(0.5)}
              initial="initial"
              whileInView="animate"
              className="flex items-center py-2 px-4 bg-red-600 text-white font-bold rounded-lg active:scale-[0.8]  hover:bg-red-500"
            >
              {" "}
              <PlayArrowIcon />
              Play
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
