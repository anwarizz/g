"use client";
import React, { useEffect } from 'react'
import Error from './Error';
import { ErrorBoundary } from "react-error-boundary";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


export default function Layout({children}) {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return navigate("/login");
      } 
    });
  }, [])

  return (
    <div className='text-[17px]'>
      <ErrorBoundary fallback={<Error />}>
        {children}
      </ErrorBoundary>
    </div>
  )
}
