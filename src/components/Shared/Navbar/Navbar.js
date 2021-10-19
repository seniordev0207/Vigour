import React from 'react';
import { NavLink } from "react-router-dom";
import useUserContext from '../../../hooks/useUserContext';
import changeNavbarBack from '../../../utilities/changeNavbarBack';
import "./Navbar.css";

const Navbar = () => {
    changeNavbarBack(); // change navbar background when scrolling

    const { user, logout } = useUserContext();

    return (
        <header className="position-fixed top-0 w-100">
            <nav className="navbar navbar-expand-lg navbar-light p-4">
                <div className="container">
                    <NavLink to="/"
                        className="navbar-brand d-flex justify-content-center me-5">
                        <img src="/favicon.png" alt="" width="40" />
                        <h1 className="fs-3 fw-bold m-0 ms-2 lh-base">Vigour</h1>
                    </NavLink>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navLinks">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <NavLink className="nav-link fs-5" to="/home" activeStyle={{ color: '#f7565e' }}>Home</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className="nav-link fs-5" to="/covid19" activeStyle={{ color: '#f7565e' }}>Covid-19 Zone</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className="nav-link fs-5" to="/contact" activeStyle={{ color: '#f7565e' }}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="text-center d-lg-flex align-items-center">
                            {!user ?
                                <NavLink className="nav-link fs-5 text-center" to="/login">
                                    <button className="btn text-white px-3" style={{ background: '#f7565e' }}>Login</button>
                                </NavLink>
                                : <>
                                    <NavLink to="/profile" style={{ textDecoration: 'none', color: '#c5000a' }}>
                                        <div className="d-flex align-items-center justify-content-center">
                                            {user.displayName &&
                                                <h6 className="m-3 me-0 my-lg-0 text-capitalize">{user.displayName}</h6>}
                                            {user.photoURL ?
                                                <img src={user.photoURL} alt="" className="navBar-user-img m-3 my-lg-0" />
                                                : <span className="gradient-text m-3 my-lg-0 fs-4">
                                                    <i className="fas fa-user-circle"></i>
                                                </span>
                                            }
                                        </div>
                                    </NavLink>
                                    <button className="btn text-white" style={{ background: '#f7565e' }}
                                        onClick={logout}>Log out <i className="fas fa-sign-out-alt"></i></button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;