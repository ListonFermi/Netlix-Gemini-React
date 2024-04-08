import { useDispatch} from "react-redux";
import {  TMDB_URL } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

function useNowPlayingMovies(tag) {
  const dispatch = useDispatch();

  async function getNowPlayingMovies() {
    let res = await fetch(TMDB_URL.baseURL+TMDB_URL[tag], {method:'GET'});
    res = await res.json();
    dispatch(addNowPlayingMovies(res?.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies