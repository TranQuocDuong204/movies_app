import React, { useEffect, useState } from "react";
import getApiAll from "../services/GetApiAll";
import ItemTvShow from "../components/tvShowComponent/ItemTvShow";
import PaginationTv from "../components/tvShowComponent/PaginationTv";
import Loading from "../components/Loading";
const TvShowPage = () => {
  const [dataTvShow, setDataTvShow] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiTvShow = async () => {
    setIsLoading(true);
    const params = {
      page: dataTvShow.page,
    };
    const tv = await getApiAll.getApiTVShow(params);

    const { page, results, total_pages, total_results } = tv;
    setDataTvShow({
      page,
      results,
      total_pages,
      total_results,
    });
    setIsLoading(false);
  };

  const getPageTv = (page) => {
    setDataTvShow({
      ...dataTvShow,
      page,
    });
  };

  useEffect(() => {
    fetchApiTvShow();
  }, [dataTvShow.page]);
  return (
    <>
      <div className="pt-16">
        <div className=" flex flex-row items-center justify-between    my-4 mx-2  rounded-lg max-md:flex-col">
          <h1 className=" text-2xl font-semibold pl-3">Tv Show</h1>
        </div>

        <div className="w-full mx-auto px-1 ">
          {isLoading ? (
            <Loading isLoading={isLoading} />
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,240px)]  gap-3 max-md:justify-center">
              {dataTvShow.results.map((item) => {
                return <ItemTvShow dataItem={item} key={item.id} />;
              })}
            </div>
          )}
        </div>

        <div className=" flex justify-center mb-3 ">
          <PaginationTv
            getPageTv={getPageTv}
            totalPage={Math.ceil(
              dataTvShow.total_results / dataTvShow.total_pages
            )}
          />
        </div>
      </div>
    </>
  );
};

export default TvShowPage;
