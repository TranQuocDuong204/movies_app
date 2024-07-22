import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import getApiAll from "../../services/GetApiAll";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 40,
  backgroundColor: "rgba(107, 114, 128, 0.5)", // bg-neutral-700 with opacity 50%
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function PlayVideo({ dataId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataPlayVideo, setDataPlayVideo] = React.useState([]);

  const getApiPlayVideo = async (dataId) => {
    const res = await getApiAll.getApiVideos(dataId);
    const { results } = res;
    setDataPlayVideo(results);
  };

  React.useEffect(() => {
    getApiPlayVideo(dataId);
  }, [dataId]);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: "white",
        }}
      >
        Play Trailer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${dataPlayVideo[0]?.key}`}
              title="YouTube video player"
            ></iframe>

            <span
              className=" absolute top-[-33px] right-[-5px] cursor-pointer bg-opacity-5 max-lg:top-0 max-lg:right-0"
              onClick={handleClose}
            >
              <CancelIcon
                sx={{
                  fontSize: 35,
                }}
              />
            </span>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
