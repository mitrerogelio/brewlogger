import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import { useState, useEffect } from 'react'

export const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const logout = async (event) => {
    event.preventDefault()
    await signOut(auth)
  }

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-primary text-3xl" to='/' >brewlogger</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={loggedIn ? "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" : "https://images.unsplash.com/photo-1504710515126-acde274564d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
          </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to='/profile'>Profile</Link></li>
            {/* <li><Link to='/settings'>Settings</Link></li> */}
            <li><Link to='#' onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
