import React from 'react'

function VideoTitle({ title, overview }) {
  return (
    <div className='absolute pl-24 pt-[20%] text-white w-full aspect-video bg-gradient-to-r from-black'>
      <h1 className='font-bold text-5xl py-6'>{title}</h1>
      <p className='w-1/3' >{overview}</p>
      <div className='my-6 flex'>
        <button className='px-8 py-2 bg-white text-black rounded-md flex hover:opacity-60'>
          <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
          </svg>
          Play</button>
        <button className=' mx-2 px-10 py-2 text-white rounded-md flex bg-gray-600 hover:opacity-60'>
          <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="CircleI" aria-labelledby=":Rkqt9llkm:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
          </svg>
          Movie Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
