export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmRkNzlkNTBmYmYyYTMzYjY3ODAzYTZmNzkyZmNiNCIsInN1YiI6IjY2MDcwYTE3MDIxY2VlMDE3YzQ4YjhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTVHcEyJZgb-9yPTu2aZH6Xt7EKe9XQkjBmiR6Njtio",
  },
};

export const TMDB_POPULAR = 'https://api.themoviedb.org/3/movie/popular?page=1'
export const TMDB_VIDEOS = (movie_id) =>  `https://api.themoviedb.org/3/movie/${movie_id}/videos`