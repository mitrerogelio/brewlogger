import { auth } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { SignIn } from '../components/SignIn'
import { ProfileLayout } from '../components/ProfileLayout'
import { CreateAccount } from '../components/CreateAccount'

export const Profile = ({children}) => {
  const [user, setUser] = useState({})
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const [form, setForm] = useState(true)

  // For Child Components
  const updateLoginEmail = (event) => {
    setLoginEmail(event.target.value)
  }
  const updateLoginPassword = (event) => {
    setLoginPassword(event.target.value)
  }
  const updateRegEmail = (event) => {
    setRegisterEmail(event.target.value)
  }
  const updateRegPassword = (event) => {
    setRegisterPassword(event.target.value)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const register = async (event) => {
    event.preventDefault()
    try {
      const newUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    } catch (error) {
        console.log(error)
      }
  }

  const login = async (event) => {
    event.preventDefault()
    try {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async (event) => {
    event.preventDefault()
    await signOut(auth)
  }

  const formSwap = () => {
    setForm(!form)
  }

  return (
    <ProfileLayout>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 items-center'>
        {user ? (
            <div className='card-body'>
              <p className='text-2xl text-center h-24'>Welcome, <span className='text-accent-content'>{user.email}</span></p>
              <button onClick={logout} className='btn btn-primary'>Log Out</button>
            </div>
        ) : (
          <section className='w-full'>
            {form ? 
            <SignIn
              onSubmit={login}
              email={loginEmail}
              updateLoginEmail={updateLoginEmail}
              password={loginPassword}
              updateLoginPassword={updateLoginPassword}
            /> 
            : 
            <CreateAccount
              onSubmit={register}
              email={registerEmail}
              updateRegEmail={updateRegEmail}
              password={registerPassword}
              updateRegPassword={updateRegPassword}
              />
            }
            
            <section className='w-full flex flex-col justify-evenly items-center h-36 bg-base-300'>
              <h3 className='text-xl text-secondary-content'>New Here?</h3>
              <button 
              className='btn btn-secondary w-3/5'
              onClick={formSwap}
              >Create Account</button>
            </section>

          </section>
        )}
      </div>
    </ProfileLayout>
  )
}
