import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser().then(() => {
            // signOut successfull
        })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/allReviews">All Reviews</NavLink>
                            <NavLink to="/addReview">Add Review</NavLink>
                            <NavLink to="/myReviews">My Reviews</NavLink>
                            <NavLink to="/gameWatchList">Game Watchlist</NavLink>
                        </div>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chill Gamer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/allReviews">All Reviews</NavLink>
                    <NavLink to="/addReview">Add Review</NavLink>
                    <NavLink to={`/myReviews/${user?.email}`}>My Reviews</NavLink>
                    <NavLink to={`/gameWatchList/${user?.email}`}>Game Watchlist</NavLink>
                </ul>
            </div>
            {user ? (
                <div className="md:navbar-end">
                    <div className="flex border-2 border-gray-200 p-1 rounded items-center">
                        <div className="avatar">
                            <div className="w-6 h-6 md:w-12 md:h-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div className="mx-4 text-sm md:text-base">
                            <h2>{user?.displayName}</h2>
                            <h2>{user?.email}</h2>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-neutral ml-2">Logout</button>
                </div>
            ) : (
                <div className="navbar-end gap-4">
                    <NavLink to="/login" >Login</NavLink>
                    <NavLink to="/register">Registration</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;