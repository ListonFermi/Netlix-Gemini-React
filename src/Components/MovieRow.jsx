import React from 'react'
import MovieCard from './MovieCard'


function MovieRow({ movies ,title}) {
  return (
    <div >
      <div >
        <h1 className='text-white font-bold text-3xl py-2'>{title}</h1>
        <div className='flex overflow-x-scroll  mb-3' id='movieRow'>
          {movies.map((movie) =>(movie?.backdrop_path && <MovieCard key={movie.id} img={movie?.backdrop_path} />))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
