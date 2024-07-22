import React, { useCallback, useEffect, useMemo, useState } from "react";
import getApiAll from "../services/GetApiAll";
import ItemFilm from "../components/ItemFilm";
import Button from "@mui/material/Button";
import Loading from "../components/Loading";
import SelectGenres from "../components/moviesComponent/SelectGenres";
import ItemMoviesSelect from "../components/moviesComponent/ItemMoviesSelect";
const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const [dataDiscover, setDataDiscover] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const fetchDiscoverMovies = async () => {
    setIsLoading(true);
    try {
      const params = {
        page: page,
      };
      const res = await getApiAll.getApiDiscoverMovies(params);
      const { results } = res;
      setDataDiscover((prev) => [...prev, ...results]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetPage = () => {
    setPage((prev) => prev + 1);
  };

  const getDataSelect = useCallback((data) => {
    setDataSelect(data);
  }, []);

  const filterItem = useMemo(() => {
    return dataDiscover.filter((item) =>
      item.genre_ids.some((genre_id) => dataSelect.includes(genre_id))
    );
  }, [dataSelect, dataDiscover]);
  useEffect(() => {
    fetchDiscoverMovies();
  }, [page]);

  return (
    <div className="pt-16">
      <div className=" flex flex-row items-center justify-between   bg-slate-700 my-4 mx-2  rounded-lg max-md:flex-col">
        <h1 className=" text-2xl font-semibold pl-3">Movies Show</h1>

        <div className=" border-orange-50 ">
          <SelectGenres getDataSelect={getDataSelect} />
        </div>
      </div>

      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="w-full mx-auto px-1 ">
          <div className="grid grid-cols-[repeat(auto-fit,240px)]  gap-3 max-md:justify-center">
            {filterItem && filterItem.length > 0
              ? filterItem.map((item) => (
                  <ItemMoviesSelect dataItem={item} key={item.id} />
                ))
              : dataDiscover?.map((item) => (
                  <ItemFilm dataItem={item} key={item.id} />
                ))}
          </div>

          <div className=" flex justify-center mb-3">
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                border: "1px solid white",
              }}
              onClick={handleSetPage}
            >
              Loading More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
