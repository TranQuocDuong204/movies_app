import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SideBar from "./SideBar";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ModalSearch from "./ModalSearch";
const Header = () => {
  const loacation = useLocation();
  const removeSpace = loacation?.search?.slice(3)?.split("%20").join(" ");
  const [valueSearch, setValueSearch] = useState(removeSpace);
  const AnimatedNavLink = motion(NavLink);
  const navigate = useNavigate();
  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Movies",
      href: "movies",
    },
    {
      label: "Tv Show",
      href: "tv",
    },
    {
      label: "Wish List",
      href: "wishlist",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (valueSearch) {
      navigate(`/search?q=${valueSearch}`);
    }
    setTimeout(() => {
      setValueSearch("");
    }, 8000);
  }, [valueSearch]);

  return (
    <>
      {" "}
      <header className=" fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-50 px-10 z-40">
        <div className=" container mx-auto px-4 flex items-center h-full">
          {/* logo */}
          <div className=" cursor-pointer">
            <Link to={"/"}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src={logo}
                alt="logo"
                width={120}
              />
            </Link>
          </div>
          {/* navbar */}
          <nav className="max-[500px]:hidden flex items-center gap-4 ml-6">
            {navigation.map((item, index) => {
              return (
                <AnimatedNavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `mx-2 text-lg hover:text-white ${
                      isActive
                        ? "text-white border-b-[3px] border-b-red-500 transition-all"
                        : "border-transparent"
                    }`
                  }
                >
                  {item.label}
                </AnimatedNavLink>
              );
            })}
          </nav>
          {/* search */}

          <div className="ml-auto flex items-center gap-6">
            <form className="flex items-center" onClick={handleSubmit}>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                type="text"
                placeholder="search film..."
                className="text-white px-4 py-2 outline-none border-none max-lg:hidden  bg-neutral-500 bg-opacity-45 rounded-lg flex items-center"
                onChange={(e) => setValueSearch(e.target.value)}
                value={valueSearch}
              />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="active:scale-50 transition-all cursor-pointer hidden max-lg:block ml-4"
              >
                <ModalSearch />
              </motion.button>
            </form>
            <Link to={"/login"}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="overflow-hidden cursor-pointer active:scale-50 transition-all max-[500px]:hidden"
              >
                <AccountCircleIcon
                  sx={{
                    fontSize: 32,
                  }}
                />
              </motion.div>
            </Link>
          </div>
          {/* component sidebar */}
          <div className="min-[500px]:hidden cursor-pointer active:scale-50 transition-all text-neutral-400">
            <SideBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
