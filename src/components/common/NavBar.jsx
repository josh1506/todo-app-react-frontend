import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <div className=''>
            <h1>Todo App</h1>
            <div>
                <Link>Login</Link>
                /
                <Link>Sign up</Link>
            </div>
        </div>
    );
}

export default NavBar;