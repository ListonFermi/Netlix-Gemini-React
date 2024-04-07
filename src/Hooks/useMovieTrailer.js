import { TMDB_API_OPTIONS, TMDB_VIDEOS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";

function useMovieTrailer(movieId){
    const dispatch = useDispatch()
    const movieTrailer  = useSelector((store)=>store?.movies?.movieTrailer);
    
    async function getMovieTrailer(movieId){
        let res = await fetch(TMDB_VIDEOS(movieId),TMDB_API_OPTIONS )
        res = await res.json()  
        console.log('getMovieTrailer')
        console.log(res)
        res= res.results.filter(value=>value.type === "Trailer")?.[0]
        console.log(res)
        dispatch(addMovieTrailer(res.key))
    }

    useEffect(()=>{
        getMovieTrailer(movieId)
    },[])
}

export default useMovieTrailer