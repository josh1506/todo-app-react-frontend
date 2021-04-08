import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import '../assets/css/landingpage.css'

function LandingPage(props) {
    return (
        <div className="landing-page-container">
            <div className="landing-page-show-content">
                <div className="landing-page-img"></div>
                {props.auth ?
                    <Link to='/todo' className="landing-page-button">Go to Dashboard</Link> :
                    <Link to='/login' className="landing-page-button">Register/Login</Link>}
            </div>
            <div className='landing-page-paragraph-container'>
                <p className="landing-page-paragraph">To-do lists should not take hours to build and should not be too complex. Any second you spent making a task list and planning for the job ahead is time lost instead of going out there and removing tasks from your calendar.</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(LandingPage);