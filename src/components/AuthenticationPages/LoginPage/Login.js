import React from 'react';
import useUserContext from '../../../hooks/useUserContext';

const Login = () => {
    const { googleLogin } = useUserContext();
    return (
        <div>
            <button className="btn btn-danger" onClick={googleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;