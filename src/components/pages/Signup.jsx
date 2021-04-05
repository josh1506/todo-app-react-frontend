import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/signup.css'

function Signup(props) {
    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (token) props.history.replace('/todo')
    }, [])

    return (
        <div className='signup-page-container'>
            <div className='signup-container'>
                <form action="" className="signup-form-container">
                    <label htmlFor="username" className='signup-label'>Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" className='signup-input-text' />
                    <label htmlFor="password" className='signup-label'>Password</label>
                    <input type="password" name="password" id="password" className='signup-input-text' placeholder='Password' />
                    <label htmlFor="confirm-password" className='signup-label'>Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" className='signup-input-text' placeholder='Confirm Password' />
                </form>
                <div className='signup-button-container'>
                    <Link to='/login' className='signup-button-cancel'>Cancel</Link>
                    <button className='signup-button-create'>Create Account</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;