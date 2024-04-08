import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GeminiReducer from "./GeminiSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies : moviesReducer,
    Gemini : GeminiReducer
  },
});
