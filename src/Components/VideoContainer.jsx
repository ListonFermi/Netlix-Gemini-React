import React from 'react'
import useMovieTrailer  from '../Hooks/useMovieTrailer'
import {useSelector} from 'react-redux' 

function VideoContainer({id}) {

  useMovieTrailer(id)
  const key = useSelector(store=>store.movies.movieTrailer)

  return (
    <div className='w-full'>
      <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1"} ></iframe>
    </div>
  )
}

export default VideoContainer
