import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const footerLinkStyles = {
    textDecoration: 'none', color: 'inherit'
}

const Footer = () => {
    return (
        <footer className="position-relative py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex flex-column text-center">
                        <div><img src="/logo192.png" alt="vigour" width="130" /></div>
                        <div className="py-4">
                            <h6><b>Phone:</b> 1-800-643-4300</h6>
                            <h6><b>E-mail:</b> vigour@medical.com</h6>
                            <h6><b>Address:</b> Brooklyn, NY 10036, US</h6>
                            <h6><b>We’re Open:</b> Mon - Sat, 9:00AM - 8:00PM</h6>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-5">
                        <h1 className="h4">Medical Departments</h1>
                        <div className="footer-links row row-cols-2 my-4">
                            <div className="px-4">
                                <p><NavLink style={footerLinkStyles} to="/service/2">Pulmonology</NavLink></p>
                                <p>Rehabilitation</p>
                                <p>Outpatient</p>
                                <p>Oncology</p>
                                <p><NavLink style={footerLinkStyles} to="/service/5">Ophthalmology</NavLink></p>
                                <p><NavLink style={footerLinkStyles} to="/service/1">Neurophysiology</NavLink></p>
                            </div>
                            <div className="px-4">
                                <p><NavLink style={footerLinkStyles} to="/service/8">Obstetrics</NavLink></p>
                                <p><NavLink style={footerLinkStyles} to="/service/7">Gynecology</NavLink></p>
                                <p>Emergency</p>
                                <p><NavLink style={footerLinkStyles} to="/service/3">Gastroenterology</NavLink></p>
                                <p><NavLink style={footerLinkStyles} to="/service/6">Dentistry</NavLink></p>
                                <p><NavLink style={footerLinkStyles} to="/service/4">Cardiology</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3">
                        <h1 className="h4">Useful Links</h1>
                        <div className="footer-links px-4 my-4">
                            <p>Our Team</p>
                            <p><NavLink style={footerLinkStyles} to="/contact">Contact Information</NavLink></p>
                            <p><NavLink style={footerLinkStyles} to="/covid19">Our Blog</NavLink></p>
                            <p>Products</p>
                            <p>Image Credits</p>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center">SR TAMIM © 2021 | All Rights Reserved</p>
            </div>
            <div className="footer-background position-absolute bottom-0 end-0 mw-100" style={{ zIndex: -1 }}>
                <img src="/images/footer-back.svg" alt="" className="img-fluid" />
            </div>
        </footer >
    );
};

export default Footer;