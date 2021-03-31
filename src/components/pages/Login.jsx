import React from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/login.css'

function Login(props) {
    return (
        <div className="login-page-container">
            <div className='login-container'>
                <form className='login-form-container'>
                    <label htmlFor="username" className="login-label">Username/Email</label>
                    <input type="text" name="username" id="username" className="login-input-text" placeholder="Username/Email" />
                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="text" name="password" id="password" className="login-input-text" placeholder="Password" />
                </form>
                <div className='login-btn-container'>
                    <button className='login-btn-login'>Login</button>
                    <div className='login-btn-container-two'>
                        <Link to='/forgot-password' className='login-btn-forgotpass'>Forgot Password</Link>
                        <Link to='/signup' className='login-btn-signup'>Signup</Link>
                    </div>
                    <button style={{ width: 50, height: 50 }}>F</button>
                </div>
            </div>
        </div>
    );
}

export default Login;