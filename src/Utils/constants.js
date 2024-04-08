/*export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmRkNzlkNTBmYmYyYTMzYjY3ODAzYTZmNzkyZmNiNCIsInN1YiI6IjY2MDcwYTE3MDIxY2VlMDE3YzQ4YjhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTVHcEyJZgb-9yPTu2aZH6Xt7EKe9XQkjBmiR6Njtio",
  },
};
*/
export const GEMINI_API_KEY = 'AIzaSyBwv_ojK68YW2AnfwFDytweUJ5F_81GAUE'

const API_KEY_HERE = 'e2dd79d50fbf2a33b67803a6f792fcb4'

export const TMDB_POPULAR = `https://api.themoviedb.org/3/movie/popular?page=1&`;


export const TMDB_VIDEOS = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY_HERE}`;


export const TMDB_URL = {
  baseURL: "https://api.themoviedb.org/3",
  
  imageURL: "https://image.tmdb.org/t/p/w500",

  search: (query)=> `/search/movie?query=${query}&api_key=${API_KEY_HERE}&include_adult=false&page=1`,

  popular: `/movie/popular?api_key=${API_KEY_HERE}&language=en-US`,

  trending: `/trending/all/week?api_key=${API_KEY_HERE}&language=en-US`,

  action: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

  originals: `/discover/tv?api_key=${API_KEY_HERE}&with_networks=213`,

  comedy: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=35`,

  horror: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=27`,

  action: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

  romanceMovies: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749`,

  documentaries: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=99`,

};
