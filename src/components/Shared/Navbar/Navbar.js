import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { CustomLink, CustomNavLink } from '../../../App';
import useUserContext from '../../../hooks/useUserContext';
import changeNavbarBack from '../../../utilities/changeNavbarBack';
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation()
    useEffect(changeNavbarBack, []) // change navbar background when scrolling

    const { user, logout } = useUserContext();

    return (
        <header className="position-fixed top-0 w-100">
            <nav className={`navbar navbar-expand-lg px-4 ${location.pathname === '/covid19' ? 'navbar-dark' : 'navbar-light'}`}>
                <div className="container px-0">
                    <CustomNavLink to="/"
                        className="navbar-brand d-flex justify-content-center me-5">
                        <img src="/favicon.png" alt="" width="40" />
                        <h1 className="fs-3 fw-bold m-0 ms-2 lh-base">Vigour</h1>
                    </CustomNavLink>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <CustomNavLink className="nav-link fs-5" to="/" exact activeStyle={{ color: '#f7565e' }}>Home</CustomNavLink>
                            </li>
                            <li className="nav-item">
                                <CustomNavLink className="nav-link fs-5" to="/covid19" activeStyle={{ color: '#f7565e' }}>Covid-19 Zone</CustomNavLink>
                            </li>
                            <li className="nav-item">
                                <CustomNavLink className="nav-link fs-5" to="/contact" activeStyle={{ color: '#f7565e' }}>Contact</CustomNavLink>
                            </li>
                            <li className="text-center d-flex align-items-center gap-3 ms-md-3">
                                {!user ? <CustomLink to="/login"
                                    className="nav-link fs-5 text-center">
                                    <button className="btn text-white px-3" style={{ background: '#f7565e' }}>Login</button>
                                </CustomLink> : <>
                                    <CustomLink to="/profile"
                                        style={{ textDecoration: 'none', color: '#c5000a' }}
                                    >{user.photoURL ? <img alt=""
                                        src={user.photoURL} className="navBar-user-img" />
                                        : <span className="gradient-text fs-3">
                                            <i className="fas fa-user-circle"></i>
                                        </span>}
                                    </CustomLink>
                                    <button className="btn text-white" style={{ background: '#f7565e' }}
                                        onClick={logout}>Log out <i className="fas fa-sign-out-alt">
                                        </i></button>
                                </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;