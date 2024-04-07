import React  from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

function Browse() {
  
  useNowPlayingMovies()


  return (
    <div >
      <Header/>
      <MainContainer />
      <SecondaryContainer/>
      {/**
        MainContainer
          VideoBackground
          VideoTitle
        Secondary Container
      
  */}
   </div>
  )
}

export default Browse
