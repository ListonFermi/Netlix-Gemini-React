import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh7dfjG4x0HdnrRWEjn2Jo7kYb4e4m478",
  authDomain: "netflix-gpt-react-listonfermi.firebaseapp.com",
  projectId: "netflix-gpt-react-listonfermi",
  storageBucket: "netflix-gpt-react-listonfermi.appspot.com",
  messagingSenderId: "671799614025",
  appId: "1:671799614025:web:4f30344bd4643939b53d98",
  measurementId: "G-7KEKFZXFFT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();