import React from "react";
import Slider from "../components/Slider";
import FilmCard from "../components/FilmCard";
import getApiAll from "../services/GetApiAll";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingData, setTrendingData] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });

  const [popularMovies, setPopularMovies] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });

  const [topRatedMovies, setTopRatedMovies] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });

  const [nowPlayingMovies, setNowPlayingMovies] = useState({
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  });

  const fetchApiFilmTrending = async () => {
    setIsLoading(true);
    try {
      const data = await getApiAll.getApiTrending();
      const { page, results, total_pages, total_results } = data;

      setTrendingData({
        page,
        results,
        total_pages,
        total_results,
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchApiFilmPopularMovies = async () => {
    setIsLoading(true);
    try {
      const data = await getApiAll.getApiPopularMovies();

      const { page, results, total_pages, total_results } = data;

      setPopularMovies({
        page,
        results,
        total_pages,
        total_results,
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchApiTopRatedMovies = async () => {
    try {
      const data = await getApiAll.getApiTopRatedMovies();
      const { page, results, total_pages, total_results } = data;
      setTopRatedMovies({
        page,
        results,
        total_pages,
        total_results,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchApiNowPlayingMovies = async () => {
    try {
      const nowPlay = await getApiAll.getApiNowPlayingMovies();
      const { page, results, total_pages, total_results } = nowPlay;

      setNowPlayingMovies({
        page,
        results,
        total_pages,
        total_results,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchApiFilmTrending();
    fetchApiFilmPopularMovies();
    fetchApiTopRatedMovies();
    fetchApiNowPlayingMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div>
          <Slider />
          <FilmCard data={trendingData.results} heading={"Trending"} />

          <FilmCard data={popularMovies.results} heading={"What's Popular"} />

          <FilmCard
            data={topRatedMovies.results}
            heading={"Top Rated Movies"}
          />

          <FilmCard data={nowPlayingMovies.results} heading={"Now Playing"} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
