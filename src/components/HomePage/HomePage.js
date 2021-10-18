import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <>
            <BannerSection />
            <AboutSection />
            <ServicesSection />
        </>
    );
};

export default HomePage;