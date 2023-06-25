import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase-config';
import React from "react";

export const ChildNav = () => {

    const logout = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        await signOut(auth);
    };

    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-primary text-3xl" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-10 h-10 mx stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex-none mr-2 dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-10 h-10 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </label>
                <ul tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to="/profile">Profile</Link></li>
                    {/* <li><Link to='/settings'>Settings</Link></li> */}
                    <li><Link to="#" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default ChildNav;