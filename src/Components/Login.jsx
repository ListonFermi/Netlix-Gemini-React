import React, { useRef, useState } from 'react'
import Header from './Header'
import formValidator from '../Utils/formValidator'
import { useNavigate } from "react-router-dom";
import { auth } from '../Utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import addUser from '../Utils/userSlice'
import { useDispatch } from "react-redux";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  function toggleForm(e) {
    e.preventDefault()
    setIsSignInForm(!isSignInForm)
  }

  function submitHandler(e) {
    e.preventDefault()

    const errorMsg = formValidator(email?.current?.value, password?.current?.value)
    setErrorMessage(errorMsg)
    if (errorMsg) return

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage)
        });

    } else {
      console.log(email, password)
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, { displayName: name.current.value })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage)
          
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="./login-bg.jpg" alt="" />
      </div>
      <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 bg-opacity-80' onClick={submitHandler}>
        <h1 className='font-bold text-white text-3xl py-6'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        {!isSignInForm &&
          <input
            ref={name}
            type="text"
            placeholder='Full name'
            className='p-2 my-2 w-full bg-gray-700  text-white'
          />}
        <input
          ref={email}
          type="email"
          placeholder='Email or phone number'
          className='p-2 my-2 w-full bg-gray-700  text-white'
        />
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-2 my-2 w-full bg-gray-700 text-white'
        />
        <p className='text-red-500 '>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-700 w-full' type='submit'>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p
          className='text-white cursor-pointer'
          onClick={toggleForm}
        > {isSignInForm ? "New to Netflix? Sign up here! " : "Already have an account? Sign in here!"}</p>
      </form>
    </div>
  )
}

export default Login
