import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-primary text-3xl" to='/' >brewlogger</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav