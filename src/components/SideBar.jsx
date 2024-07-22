import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function SideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const pages = ["", "movies", "wishlist"];
  const listIcon = [
    <TvIcon />,
    <MovieFilterIcon />,
    <FavoriteIcon />,
    <AccountCircleIcon />,
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "black",
        color: "white",
        height: "100%",
        opacity: 0.8,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Movies", "Wish List"].map((text, index) => (
          <Link to={pages[index]} key={index}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <div className="mr-1 text-gray-400">{listIcon[index]}</div>

                <div className=" text-lg  font-semibold text-neutral-300">
                  {text}
                </div>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500 w-full" />
      <List>
        {["Acount"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to={"/login"}>
              <ListItemButton>
                <div className="mr-1 text-gray-400">{listIcon[3]}</div>

                <div className=" text-lg  font-semibold text-neutral-300">
                  {text}
                </div>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className=" text-neutral-400">
              {" "}
              <DensityMediumIcon />
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
