import React from 'react';
import "./BannerSection.css";

const BannerSection = () => {
    return (
        <section className="banner-container container text-center">
            <h1 className="display-3">
                Renew your Vigour and Vitality With Us
            </h1>
            <img className="img-fluid" src="/images/home-banner.svg" alt="doctors" />
        </section>
    );
};

export default BannerSection;