import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { authAdd, authRemoved } from '../../app/auth'
import '../assets/css/navbar.css'

function NavBar(props) {
    useEffect(() => {
        if (localStorage.getItem('auth_token')) props.authAdd(localStorage.getItem('auth_token'))
    }, [])
    const handleLogoutUser = () => {
        props.authRemoved()
    }

    return (
        <div className='navbar-container'>
            <div></div>
            <Link to='/' className='navbar-title'>Todo App</Link>
            {props.auth ?
                <div className='navbar-button-container'>
                    <Link to='/todo' className='navbar-button'>Dashboard</Link>
                    <p className='navbar-button-seperator'>/</p>
                    <Link to='/' className='navbar-button' onClick={handleLogoutUser}>Logout</Link>
                </div> :
                <div className='navbar-button-container'>
                    <Link to='/login' className='navbar-button'>Login</Link>
                    <p className='navbar-button-seperator'>/</p>
                    <Link to='/signup' className='navbar-button'>Signup</Link>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authRemoved, authAdd })(NavBar);