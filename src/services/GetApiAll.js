import axios from "axios";
import { API_COMMON, API_TRENDING_MOVIES, API_POPULAR_MOVIES, API_TOP_RATED_MOVIES, API_DETAIL_MOVIES, API_LIST_CAST_MOVIES, API_VIDEOS_MOVIES, API_SIMILAR_MOVIES, API_DISCOVER_MOVIES, API_SEARCH_MOVIES, API_GENRES_MOVIES, API_NOW_PLAYING_MOVIES, API_TV_SHOW_POPULAR } from "../utils/urlApi";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTY5NjZhZDVjMzg1OTBiZjgyZmVlMTQ3ZjkyMjcwYyIsIm5iZiI6MTcyMDc2MTc5Mi40MTQyNzEsInN1YiI6IjY2NGNhYzNmYmE5YzY1MTBjNzI1OWI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.da2mIAOJ6Uakve38iflS7o3WtOAZJr26xZ3InV4x-CA'
    },

};
const getApiAll = {
    getApiTrending: async () => {
        const api = await axios.get(`${API_COMMON}/${API_TRENDING_MOVIES}`, options);
        const datas = await api.data;
        return datas;
    },

    getApiPopularMovies: async () => {
        const api = await axios.get(`${API_COMMON}/${API_POPULAR_MOVIES}`, options);
        const datas = await api.data;
        return datas;
    },

    getApiTopRatedMovies: async () => {
        const api = await axios.get(`${API_COMMON}/${API_TOP_RATED_MOVIES}`, options);
        const datas = await api.data;

        return datas;
    },
    getApiDetailsMovies: async (id) => {
        const api = await axios.get(`${API_COMMON}/${API_DETAIL_MOVIES}/${id}`, options
        );
        const datas = await api.data;
        return datas;
    },

    getApiCastMovies: async (id) => {
        const api = await axios.get(`${API_COMMON}/${API_DETAIL_MOVIES}/${id}/${API_LIST_CAST_MOVIES}`, options);

        const datas = await api.data;

        return datas;
    },
    getApiVideos: async (id) => {
        const api = await axios.get(`${API_COMMON}/${API_DETAIL_MOVIES}/${id}/${API_VIDEOS_MOVIES}`, options);

        const datas = await api.data;
        return datas;
    },

    getApiSimilarMovies: async (id) => {
        const api = await axios.get(`${API_COMMON}/${API_DETAIL_MOVIES}/${id}/${API_SIMILAR_MOVIES}`, options);
        const datas = await api.data;
        return datas;
    },

    getApiDiscoverMovies: async (params) => {
        const api = await axios.get(`${API_COMMON}/${API_DISCOVER_MOVIES}/${API_DETAIL_MOVIES}`, {
            ...options,
            params
        });

        const datas = await api.data;
        return datas;
    },
    getApiSearchMovies: async (params) => {
        const api = await axios.get(`${API_COMMON}/${API_SEARCH_MOVIES}/${API_DETAIL_MOVIES}`, {
            ...options,
            params
        })

        const datas = await api.data;
        return datas;
    },
    getAPiGenresMovies: async () => {
        const api = await axios.get(`${API_COMMON}/${API_GENRES_MOVIES}`, options);
        const datas = await api.data;
        return datas;
    },
    getApiNowPlayingMovies: async () => {
        const api = await axios.get(`${API_COMMON}/${API_DETAIL_MOVIES}/${API_NOW_PLAYING_MOVIES}`, options);

        const datas = await api.data;
        return datas;
    },

    getApiTVShow: async (params) => {
        const api = await axios.get(`${API_COMMON}/${API_TV_SHOW_POPULAR}`, {
            ...options,

            params
        });
        const datas = await api.data;
        return datas;
    }
}

export default getApiAll;