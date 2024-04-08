import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import GeminiSearch from './GeminiSearch'
import { useSelector } from "react-redux";

function Browse() {


  useNowPlayingMovies('popular')

  const showGeminiSearch = useSelector(store => store.Gemini.GeminiSearch)

  return (
    <div>
      <Header />

      {showGeminiSearch ?
        <GeminiSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
    </div>
  )
}

export default Browse
