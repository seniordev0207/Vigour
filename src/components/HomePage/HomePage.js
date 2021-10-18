import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import DidYouKnowSection from './DidYouKnowSection/DidYouKnowSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <>
            <BannerSection />
            <AboutSection />
            <ServicesSection />
            <DidYouKnowSection />
        </>
    );
};

export default HomePage;