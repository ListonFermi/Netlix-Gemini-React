import React from 'react'

function MovieCard({ img }) {

  return (
    <img className='w-64 mr-2' src={"https://image.tmdb.org/t/p/w500" + img} alt=""  />
  )
}

export default MovieCard
