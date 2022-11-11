import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const Header = () => {
    const { user, googleSignIn, logOut } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(err => console.log(err))
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to='/reviews'>My Reviews</Link></li>
                    <li><Link to='/add'>Add Course</Link></li>
                    <li><Link to='/' onClick={handleLogOut}>Log Out</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
        <li><Link to='/blog'>Blog</Link></li>
    </>

    return (

        <div className="navbar bg-stone-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-extrabold normal-case text-2xl text-white">Programming Sage</Link>

            </div>
            <div className="font-bold text-xl text-white navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end mb-0">
                <a href='#t' className="btn" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> <span className='ml-2'>Sign in</span></a>
            </div>
        </div>

    );
};

export default Header;