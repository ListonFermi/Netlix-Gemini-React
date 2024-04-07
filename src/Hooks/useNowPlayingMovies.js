import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_POPULAR } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store)=>store?.movies?.nowPlayingMovies);

  async function getNowPlayingMovies() {
    let res = await fetch(TMDB_POPULAR, TMDB_API_OPTIONS);
    res = await res.json();
    dispatch(addNowPlayingMovies(res?.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies