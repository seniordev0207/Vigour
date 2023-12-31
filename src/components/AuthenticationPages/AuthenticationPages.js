import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { CustomLink } from '../../App';
import useUserContext from '../../hooks/useUserContext';
import "./AuthenticationPages.css";
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';

// authentication page, login or sign up from this component
const AuthenticationPages = () => {
    const { user, googleLogin, githubLogin, facebookLogin, emailLogin } = useUserContext();

    const pathname = useLocation()?.state?.from.pathname || '/profile';

    return (
        <section className="container text-center">
            {pathname !== '/profile' && <h5 className="mb-5">
                You've to login first to visit {pathname.slice(1, pathname.length).toUpperCase()} page
            </h5>}
            {user ? <Redirect to={pathname} /> : <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                        <p className="my-5">
                            Don't have any account? <CustomLink to="/signup" style={{ color: '#f7565e' }}>Create Account</CustomLink>
                        </p>
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                        <p className="my-5">
                            Already have an account? <CustomLink to="/login" style={{ color: '#f7565e' }}>Login</CustomLink>
                        </p>
                    </Route>
                </Switch>
                <p>Sign in with</p>
                <span className='sign-in-buttons fs-1 p-0 m-4 mt-0' onClick={googleLogin} title="Sign In With Google" >
                    <i className="fab fa-google"></i>
                </span>
                <span className='sign-in-buttons fs-1 p-0 m-4 mt-0' onClick={githubLogin} title="Sign In With GitHub" >
                    <i className="fab fa-github"></i>
                </span>
                <span className='sign-in-buttons fs-1 p-0 m-4 mt-0' onClick={facebookLogin} title="Sign In With Facebook" >
                    <i className="fab fa-facebook"></i>
                </span>
                <br />
                <button onClick={() => emailLogin('demo@srt.com', 'Demo123')}
                    className='gradient-button border-0 px-4 py-2 mt-5 mb-4 rounded'>Skip login</button>
                <br />
                <small>Click on "skip login" to visit private pages without login with email/google</small>
            </Router>
            }
        </section>
    );
};

export default AuthenticationPages;