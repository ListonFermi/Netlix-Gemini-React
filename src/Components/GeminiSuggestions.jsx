import React from 'react'
import { useSelector} from "react-redux";
import MovieRow from './MovieRow'

function GeminiSuggestions() {
  const {GeminiResults, TMDBResults} = useSelector(store=>store.Gemini)
  if(!GeminiResults || !TMDBResults) return null

  return (
    <div className='ml-10'>
       {GeminiResults.map((movie,i)=><MovieRow key={movie} movies={TMDBResults[i]} title={movie}  />)}
    </div>
  )
}

export default GeminiSuggestions
