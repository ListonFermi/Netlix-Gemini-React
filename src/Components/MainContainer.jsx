import React from 'react'
import VideoTitle from './VideoTitle'
import VideoContainer from './VideoContainer'
import {useSelector} from 'react-redux' 

function MainContainer() {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;
  
    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}  />
            <VideoContainer  id={id}   />
        </div>
    )
}

export default MainContainer
