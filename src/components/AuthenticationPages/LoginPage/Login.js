import React, { useEffect, useState } from 'react';
import handleFirebaseError from '../../../Firebase/handleFirebaseError';
import useUserContext from '../../../hooks/useUserContext';

const Login = () => {
    const { emailLogin, error, setError } = useUserContext();
    useEffect(() => setError(null), [setError])

    const [inputs, setInputs] = useState({
        email: '', password: ''
    })
    const handleInput = (event) => {
        const newInputs = { ...inputs };
        newInputs[event.target.name] = event.target.value;
        setInputs(newInputs);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = inputs;
        (password.length >= 6) && emailLogin(email, password);
    }
    return (
        <>
            <form className="text-center" onSubmit={handleSubmit} >
                <div className="form-heading fw-bold">
                    <i className="fas fa-user"></i> <br />
                    <span className="fs-2 gradient-text">Login</span>
                </div>
                <div className="form-input-wrapper">
                    <input type="email" name="email" id="emailInput" placeholder="Email" onChange={handleInput} required />
                    <label>Email</label>
                </div>
                <div className="form-input-wrapper">
                    <input type="password" name="password" id="passwordInput" placeholder="Password" onChange={handleInput} required />
                    <label>Password</label>
                </div>
                <div className="mt-4 mb-3" style={{ color: 'red' }}>
                    {error && handleFirebaseError(error)
                    }</div>
                <input type="submit" className="submit-button btn text-white fs-5 px-4" value="Login" />
            </form>
        </>
    );
};

export default Login;