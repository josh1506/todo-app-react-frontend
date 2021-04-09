import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { authAdd } from '../../app/auth'
import route from '../../app/route'
import '../assets/css/login.css'

function Login(props) {
    const [userData, setUserData] = useState({ username: '', password: '' })
    const [error, setError] = useState('')

    const handleSubmit = async () => {
        setError('')
        const data = await route.post('user/auth/', userData)
            .catch(() => setError('username or password is incorrect'))

        if (data) {
            setError('')
            const token = data.data.token
            props.authAdd(token)
            props.history.replace('/')
        }
    }

    const responseFacebook = async (response) => {
        await route.post('user/facebook/auth/', response)
            .then(({ data }) => {
                setError('')
                const token = data.token
                props.authAdd(token)
                props.history.replace('/')
            })
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
                    <div className='login-btn-container-two'>
                        <Link to='/signup' className='login-btn-signup'>Signup</Link>
                        <button className='login-btn-login' onClick={() => handleSubmit()}>Login</button>
                    </div>
                    <div>
                        <p className='login-label'>Login with:</p>
                        <FacebookLogin
                            appId="808533529754347"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="facebook-login-btn"
                            textButton={<FontAwesomeIcon icon={faFacebookF} color='white' size='2x' className='facebook-login-icon' />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authAdd })(Login);