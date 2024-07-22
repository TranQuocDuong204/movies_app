import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationTv({ getPageTv, totalPage}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => {
          getPageTv(page);
        }}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "gray",
            },
            "&.Mui-selected": {
              backgroundColor: "white",
              color: "black",
            },
          },
        }}
      />
    </Stack>
  );
}
