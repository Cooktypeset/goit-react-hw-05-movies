import axios from "axios";

const API_KEY = 'api_key=2bb89b9f7a2d328a2001268c92455cb9'

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`
  );
  return response.data;
};


export const getMovieDetails = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?${API_KEY}`
    );
    return response.data;
}
 

export const getMovieCast = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}`
    );
    return response.data;
}

export const getMovieReviews = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?${API_KEY}`
    );
    return response.data;
};


export const getMovieBySearch = async query => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&${API_KEY}`
    );
    return response.data;
};


