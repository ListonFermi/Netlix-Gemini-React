import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { removeUser, addUser } from '../Utils/userSlice';
import { toggleGeminiSearch } from '../Utils/GeminiSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const showGeminiSearch = useSelector(store => store.Gemini.GeminiSearch)

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // unsubscribe when component unmounts
  }, []);

  function searchBtnHandler(e){
    e.preventDefault()
    dispatch(toggleGeminiSearch())
  }

  return (
    <div className='absolute flex justify-between w-full px-16 py-2 bg-gradient-to-b from-black z-10 '>
      <img
        className='w-48'
        src="./Netflix_Logo_PMS.png" alt="" />
      {user &&
        <div>
          <button className='text-white p-2 bg-purple-600 rounded-md mr-2' onClick={searchBtnHandler}>
            {showGeminiSearch?'Homepage':'Search Gemini'}</button>
          <button onClick={handleSignOut} className='text-white p-2 bg-red-600 rounded-md mr-2'>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header
