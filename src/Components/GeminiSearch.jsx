import React from 'react'
import GeminiSearchBar from './GeminiSearchBar'

function GeminiSearch() {
  return (
    <div className=' bg-gradient-to-r from-black'>
      <div className='fixed -z-10'>
        <img src="./login-bg.jpg" alt="" />
      </div>
      <GeminiSearchBar/>
    </div>
  )
}

export default GeminiSearch
