import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className="text-lg text-center my-10">This is <Link to='/feed'>Login</Link></h1>
        </div>
    );
};

export default Login;