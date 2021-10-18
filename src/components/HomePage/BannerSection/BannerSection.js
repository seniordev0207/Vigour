import React from 'react';
import "./BannerSection.css";

const BannerSection = () => {
    return (
        <div className="banner-container container text-center">
            <h1>Renew your Vigour and Vitality
                <br />With Us
            </h1>
            <img className="img-fluid" src="/images/home-banner.svg" alt="doctors" />
        </div>
    );
};

export default BannerSection;