import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import NavBar from './components/common/NavBar';
import Signup from './components/pages/Signup';
import ToDo from './components/pages/ToDo';
import './components/assets/css/app.css';
import ForgotPassword from './components/pages/ForgotPassword';
import Footer from './components/common/Footer';

function App(props) {
    return (
        <div>
            <NavBar />
            <div className="app-content-container">
                <Switch>
                    <Route path='/todo' component={ToDo} />
                    <Route path='/forgot-password' component={ForgotPassword} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/' component={LandingPage} />
                    <Redirect />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;