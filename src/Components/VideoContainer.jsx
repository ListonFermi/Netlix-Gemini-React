import React from 'react'
import useMovieTrailer  from '../Hooks/useMovieTrailer'
import {useSelector} from 'react-redux' 

function VideoContainer({id}) {

  useMovieTrailer(id)
  const key = useSelector(store=>store.movies.movieTrailer)

  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+key+"?autoplay=1&mute=1&loop=1"} ></iframe>
    </div>
  )
}

export default VideoContainer
