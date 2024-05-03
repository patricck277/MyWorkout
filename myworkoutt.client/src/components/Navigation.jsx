import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const user = JSON.parse(localStorage.getItem('currentUser')); // Get current user from local storage

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <Link to="/userprofile">My Account</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navigation;
