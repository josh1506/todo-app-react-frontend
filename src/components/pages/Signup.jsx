import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { authAdd } from '../../app/auth'
import route from '../../app/route'
import '../assets/css/signup.css'

function Signup(props) {
    const [error, setError] = useState({})
    const [userForm, setUserForm] = useState({ username: '', password: '', confirmPassword: '' })
    const [buttonStatus, setButtonStatus] = useState(false)
    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (token) props.history.replace('/todo')
    }, [])

    useEffect(() => {
        const { password, confirmPassword } = userForm

        if (password === confirmPassword && password !== '') return setButtonStatus(false)
        return setButtonStatus(true)
    }, [userForm.password, userForm.confirmPassword])

    const handleInputPassword = event => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value

        setUserForm({ ...userForm, [name]: value })
    }

    const handleSubmit = async () => {
        delete userForm.confirmPassword

        await route.post('user/account/', userForm)
            .then(({ data }) => {
                route.post('user/auth/', userForm)
                    .then(({ data }) => {
                        props.authAdd(data.token)
                        props.history.replace('/')
                    })
            })
            .catch(({ response }) => setError(response.data))
    }

    return (
        <div className='signup-page-container'>
            <div className='signup-container'>
                {error.username && error.username.map(message => <p className='signup-error-label'>Username: {message}</p>)}
                {error.password && error.password.map(message => <p className='signup-error-label'>Password: {message}</p>)}
                <form action="" className="signup-form-container" onSubmit={handleSubmit}>
                    <label htmlFor="username" className='signup-label'>Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" className='signup-input-text' value={userForm.username} onChange={e => setUserForm({ ...userForm, username: e.target.value })} />
                    <label htmlFor="password" className='signup-label'>Password</label>
                    <input type="password" name="password" id="password" className='signup-input-text' placeholder='Password' value={userForm.password} onChange={handleInputPassword} />
                    <label htmlFor="confirm-password" className='signup-label'>Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm-password" className='signup-input-text' placeholder='Confirm Password' value={userForm.confirmPassword} onChange={handleInputPassword} />
                </form>
                <div className='signup-button-container'>
                    <Link to='/login' className='signup-button-cancel'>Cancel</Link>
                    <button className='signup-button-create' disabled={buttonStatus} onClick={handleSubmit}>Create Account</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authAdd })(Signup);