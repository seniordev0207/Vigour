import React from 'react';
import { NavLink } from "react-router-dom";
import changeNavbarBack from '../../../utilities/changeNavbarBack';
import "./Navbar.css";

const Navbar = () => {
    changeNavbarBack();
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
                                <NavLink className="nav-link fs-5" to="/contact" activeStyle={{ color: '#f7565e' }}>Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                            <NavLink className="nav-link fs-5 text-center" to="/contact">
                                <button className="btn text-white px-3" style={{ background: '#f7565e' }}>Login</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;