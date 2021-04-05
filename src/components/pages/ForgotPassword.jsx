import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/forgotpassword.css'


function ForgotPassword(props) {
    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (token) props.history.replace('/todo')
    }, [])

    return (
        <div className='forgotpass-page-container'>
            <div className="forgotpass-container">
                <p className='forgotpass-paragraph'>If you've lost your password or wish to reset it, input your recovery email to send for the next step.</p>
                <label className='forgotpass-label' for='forgot-pass-email'>Email</label>
                <input className='forgotpass-input-text' type="text" name="forgot-pass-email" id="forgot-pass-email" placeholder='Enter Email' />
                <div className='forgotpass-btn-container'>
                    <Link to='/login' className='forgotpass-btn-cancel'>Cancel</Link>
                    <button className='forgotpass-btn-send'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;