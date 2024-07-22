import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
export default function ModalSearch() {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleValueInput = (e) => {
    const valueInput = e.target.value;
    setSearchValue(valueInput);
  };
  const handleGetValueInput = () => {
    navigate(`/search?q=${searchValue}`);
    setSearchValue("");
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <SearchIcon
          sx={{
            color: "white",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="p-14">
          <Box>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, position: "relative" }}
            >
              <input
                type="text"
                placeholder="search..."
                value={searchValue}
                className=" w-full p-3 border outline-none text-white bg-neutral-800 bg-opacity-25 rounded-lg"
                onChange={handleValueInput}
              />
              <SearchIcon
                sx={{
                  position: "absolute",
                  top: "12px",
                  right: "15px",
                  cursor: "pointer",
                }}
                onClick={handleGetValueInput}
              />
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
