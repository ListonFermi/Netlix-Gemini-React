import { createSlice } from "@reduxjs/toolkit";

const GeminiSlice = createSlice({
  name: "Gemini",
  initialState: {
    GeminiSearch: false,
    GeminiResults : null,
    TMDBResults: null 
  },
  reducers: {
    toggleGeminiSearch: (state) => {
      state.GeminiSearch = !state.GeminiSearch;
    },
    addGeminiSearchResults: (state, action) =>{
      const {movieNames,tmdbResults} = action.payload
      state.GeminiResults = movieNames
      state.TMDBResults = tmdbResults
    }
  },
});

export const { toggleGeminiSearch, addGeminiSearchResults } = GeminiSlice.actions;

export default GeminiSlice.reducer;
