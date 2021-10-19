import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, useLocation } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import "./AuthenticationPages.css";
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';

// authentication page, login or sign up from this component
const AuthenticationPages = () => {
    const { user, googleLogin, githubLogin, facebookLogin } = useUserContext();

    const pathname = useLocation()?.state?.from.pathname || '/profile';

    return (
        <section className="container text-center">
            {
                pathname !== '/profile' &&
                <h5 className="mb-5">You've to login first to visit {pathname.slice(1, pathname.length).toUpperCase()} page</h5>
            }
            {user ? <Redirect to={pathname} /> :
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login />
                            <p className="my-5">
                                Don't have any account? <NavLink to="/signup" style={{ color: '#f7565e' }}>Create Account</NavLink>
                            </p>
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                            <p className="my-5">
                                Already have an account? <NavLink to="/login" style={{ color: '#f7565e' }}>Login</NavLink>
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
                </Router>
            }
        </section>
    );
};

export default AuthenticationPages;