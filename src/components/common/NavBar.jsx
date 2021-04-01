import React from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/navbar.css'


function NavBar(props) {
    return (
        <div className='navbar-container'>
            <div></div>
            <Link to='/' className='navbar-title'>Todo App</Link>
            <div className='navbar-button-container'>
                <Link to='/login' className='navbar-button'>Login</Link>
                <p className='navbar-button-seperator'>/</p>
                <Link to='/signup' className='navbar-button'>Signup</Link>
            </div>
        </div>
    );
}

export default NavBar;