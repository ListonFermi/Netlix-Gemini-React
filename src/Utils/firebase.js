import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { FRIEBASE_API_KEY } from "./constants";

const firebaseConfig = {
  apiKey: FRIEBASE_API_KEY,
  authDomain: "netflix-gpt-react-listonfermi.firebaseapp.com",
  projectId: "netflix-gpt-react-listonfermi",
  storageBucket: "netflix-gpt-react-listonfermi.appspot.com",
  messagingSenderId: "671799614025",
  appId: "1:671799614025:web:4f30344bd4643939b53d98",
  measurementId: "G-7KEKFZXFFT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();