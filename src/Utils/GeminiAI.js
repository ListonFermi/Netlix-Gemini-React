import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// Access your API key (see "Set up your API key" above)
export  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


