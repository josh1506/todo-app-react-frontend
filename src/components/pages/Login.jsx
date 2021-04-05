import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { authAdd } from '../../app/auth'
import route from '../../app/route'
import '../assets/css/login.css'

function Login(props) {
    const [userData, setUserData] = useState({ username: '', password: '' })
    const [error, setError] = useState('')

    const handleSubmit = async () => {
        console.log('click')
        const data = await route.post('auth/', userData)
            .catch(() => setError('username or password is incorrect'))

        if (data) {
            setError('')
            const token = data.data.token
            localStorage.setItem('auth_token', token)
            props.authAdd(token)
            props.history.replace('/todo')
        }
    }

    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (token) props.history.replace('/todo')
    }, [])

    return (
        <div className="login-page-container">
            <div className='login-container'>
                {error && <p className="login-error-label">* {error}</p>}
                <form className='login-form-container' onSubmit={handleSubmit}>
                    <label htmlFor="username" className="login-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="login-input-text"
                        placeholder="Username"
                        value={userData.username}
                        onChange={e => setUserData({ ...userData, username: e.target.value })}
                    />
                    <label htmlFor="password" className="login-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        className="login-input-text"
                        placeholder="Password"
                        value={userData.password}
                        onChange={e => setUserData({ ...userData, password: e.target.value })}
                    />
                </form>
                <div className='login-btn-container'>
                    <button className='login-btn-login' onClick={() => handleSubmit()}>Login</button>
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


const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authAdd })(Login);