import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { removeUser, addUser } from '../Utils/userSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

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

  return (
    <div className='absolute flex justify-between w-screen px-16 py-2 bg-gradient-to-b from-black  w-100 z-10 '>
      <img
        className='w-48'
        src="./Netflix_Logo_PMS.png" alt="" />
      {user && <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>}
    </div>
  )
}

export default Header
