import React, { useRef } from 'react'
import GeminiSuggestions from './GeminiSuggestions'
import { useDispatch} from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, TMDB_URL } from '../Utils/constants';
import { addGeminiSearchResults } from '../Utils/GeminiSlice';

function GeminiSearchBar() {
    const searchRef = useRef(null)
    const dispatch = useDispatch()

    async function searchTMDB (movie){
        const URL = TMDB_URL.baseURL+TMDB_URL.search(movie)
        console.log(URL)
        let response = await fetch(URL, {method: 'GET'})
        response = await response.json()
        return response.results 
    }


    async function searchHandler(e) {
        e.preventDefault()

        const prompt =
            'Act as a movie recommendation system and suggest some movies for the query :' +
            searchRef.current.value +
            'Give 5 movie names, comma seperated like the example result: Kaala, Endhiran, Jailer, Petta, Billa'

        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text)

        if(!text) return null;

        const movieNames = text.split(', ')

        const promiseArray = movieNames?.map(movie=>searchTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray)

        if(!tmdbResults) return null;
        dispatch(addGeminiSearchResults({movieNames,tmdbResults}))
    }

    return (
        <>
            <div className='pt-[15%] flex justify-center' onSubmit={searchHandler}>
                <form className='flex'>
                    <input ref={searchRef} className='bg-white p-4 w-96' type="text" placeholder='Enter the name of movies you want to search' />
                    <button type='submit' className='text-white p-4 bg-red-700'>Search</button>
                </form>
            </div>
            <GeminiSuggestions />
        </>
    )
}

export default GeminiSearchBar
