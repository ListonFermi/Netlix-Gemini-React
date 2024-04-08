import React from 'react'
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux'

function SecondaryContainer() {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  return (
    <div className='bg-black'>
      <div className='-mt-48 relative pl-9' >
        <MovieRow movies={movies} title={'Popular Movies'}/>
        <MovieRow movies={movies} title={'Trending Now'}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
