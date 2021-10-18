import React from 'react';
import { NavLink } from 'react-router-dom';
import useUserContext from '../../../hooks/useUserContext';

const SignUp = () => {
    return (
        <>
            <form className="text-center" >
                <div className="form-heading fw-bold">
                    <i className="fas fa-user-plus"></i> <br />
                    <span className="fs-2">Create Account</span>
                </div>
                {/* <div>{userError && handleFirebaseError(userError)}</div> */}
                <div className="auth-form-input-wrapper">
                    <input type="text" id="nameInput" placeholder="Name" required />
                    <label>Name</label>
                </div>
                <div className="auth-form-input-wrapper">
                    <input type="email" id="emailInput" placeholder="Email" required />
                    <label>Email</label>
                </div>
                <div className="auth-form-input-wrapper">
                    <input type="password" id="passwordInput" placeholder="Password" required />
                    <label>Password</label>
                </div>
                <input type="submit" className="submit-button text-white fs-5 px-4 py-2 border-0 rounded-3" value="Sign Up" />
            </form>
        </>
    );
};

export default SignUp;