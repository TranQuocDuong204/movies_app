import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getApiAll from "../services/GetApiAll";
import useDebounce from "../hooks/useDebounce";
import ItemFilm from "../components/ItemFilm";
import Loading from "../components/Loading";
const SearchPage = () => {
  const loacation = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState({
    page: 1,
    results: [],

    total_pages: null,

    total_results: null,
  });
  const search = loacation?.search?.slice(3).split("%20").join(" ");
  const query = useDebounce(search, 500);
  const fetchApiSearchMovies = async () => {
    setIsLoading(true);
    const params = {
      query,
      page: valueSearch.page,
    };
    const search = await getApiAll.getApiSearchMovies(params);
    const { page, results, total_results, total_pages } = search;
    setValueSearch({
      page,
      results,
      total_pages,
      total_results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchApiSearchMovies();
  }, [query]);
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="pt-16">
          <div className=" flex justify-center items-center">
            <h1 className=" text-2xl p-3 font-bold text-white bg-gray-400 bg-opacity-25 my-5  rounded-lg">
              Search results
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-[repeat(auto-fit,240px)]  gap-3 max-md:justify-center">
              {valueSearch.results && valueSearch.results.length > 0 ? (
                valueSearch.results.map((item, index) => (
                  <ItemFilm key={item.id} dataItem={item} />
                ))
              ) : (
                <div className=" flex justify-center items-center">
                  <div className=" text-3xl">No Found Film....</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
