import Brewmethods from '../components/Brewmethods'
import Record from '../components/Record'
import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase/firebase-config'

export const Home = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser?) => {
      setUser(currentUser!)
    })
    return () => unsubscribe()
  }, [])

  return (
    <Layout>
      {user ? (
        <>
          <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Prepare Your Coffee</h1>
          <p className='py-6 text-center'>Log your first brew by selecting your brewer below.</p>
          <nav className='flex flex-row flex-wrap justify-evenly mt-24'>
            <Brewmethods />
          </nav>
          <Record />
        </>
      ) : (
        <>
        <div className="alert alert-error shadow-lg mt-10 w-5/6 m-auto">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Please log in or create an account to begin logging your brews 🙂</span>
          </div>
        </div>
          <nav className='flex flex-row flex-wrap justify-evenly my-24'>
              <Brewmethods />
          </nav>
        </>
      )}
    </Layout>
  )
}
