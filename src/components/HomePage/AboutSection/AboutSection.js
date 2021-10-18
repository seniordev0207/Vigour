import React from 'react';
import "./AboutSection.css";

const AboutSection = () => {
    return (
        <section className="about-container container">
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 pe-5
                d-flex flex-column justify-content-center">
                    <h6>About Us</h6>
                    <h1 className="my-4">A Modern Approach to Primary Care</h1>
                    <p>
                        Search for a Vigour medical expert by specialty, disease, conditione, expertise, or doctor's last name.
                    </p>
                    <div className="mt-4">
                        <button className="primary-button">Read more</button>
                    </div>
                </div>
                <div className="text-center col-12 col-lg-6 col-xl-7">
                    <img className="img-fluid" src="/images/home-about.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;