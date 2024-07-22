import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiAll from "../services/GetApiAll";
import ListCastMovies from "../components/detailComponent/ListCastMovies";
import BoxOneDetail from "../components/detailComponent/BoxOneDetail";
import BoxTwoDetail from "../components/detailComponent/BoxTwoDetail";
import Loading from "../components/Loading";
import PosterDetail from "../components/detailComponent/PosterDetail";
import FilmCard from "../components/FilmCard";
const DetailPage = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState({});
  const [dataCastMovies, setDataCastMovies] = useState({});
  const [dataSimilarMovies, setDataSimilarMovies] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiDetailsMovies = async (id) => {
    setIsLoading(true);
    const data = await getApiAll.getApiDetailsMovies(id);
    setDataDetail(data);
    setIsLoading(false);
  };

  const fetchCastMovies = async (id) => {
    setIsLoading(true);
    const data = await getApiAll.getApiCastMovies(id);
    setDataCastMovies(data);
    setIsLoading(false);
  };

  const fetchSimilarMovies = async (id) => {
    const data = await getApiAll.getApiSimilarMovies(id);
    const { page, results, total_pages, total_results } = data;
    setDataSimilarMovies({
      page,
      results,
      total_pages,
      total_results,
    });
  };

  useEffect(() => {
    fetchApiDetailsMovies(id);
    fetchCastMovies(id);
    fetchSimilarMovies(id);
  }, [id]);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="w-full mx-auto px-1 relative">
          <div className="w-full h-[600px] relative lg:block ">
            <PosterDetail dataDetail={dataDetail} />
            <div className="absolute top-40 w-full ">
              <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
                <BoxOneDetail dataDetail={dataDetail} />
                <BoxTwoDetail dataDetail={dataDetail} />
              </div>

              {/* --------------------------- */}
            </div>
          </div>

          <div className=" container mx-auto px-10 flex max-lg:flex-col flex-row gap-2 max-lg:-top-24 max-lg:mt-80 max-md:mt-[380px] max-sm:mt-[650px] max-375:mt-680px">
            <div className="w-full pt-4">
              <ListCastMovies
                data={dataCastMovies.cast}
                heading="Top Billed Cast"
              />
              {dataSimilarMovies.results &&
              dataSimilarMovies.results.length > 0 ? (
                <FilmCard
                  data={dataSimilarMovies.results}
                  heading={"Similar"}
                />
              ) : (
                <div>
                  <h1 className="text-2xl font-semibold text-white py-3">
                    Similar
                  </h1>
                  <p className=" text-xl py-4">No results....</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
