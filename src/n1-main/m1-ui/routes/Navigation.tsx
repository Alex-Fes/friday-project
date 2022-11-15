import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <div><NavLink to='/login'>Login</NavLink></div>
                <div><NavLink to='/registration'>Registration</NavLink></div>
                <div><NavLink to='/password'>Password</NavLink></div>
                <div><NavLink to='/profile'>Profile</NavLink></div>
                <div><NavLink to='/error'>Error404</NavLink></div>
                <div><NavLink to='/test'>Test</NavLink></div>
            </nav>
        </div>
    )
}

export default Navigation;