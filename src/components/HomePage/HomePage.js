import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import Covid19Section from './Covid19Section/Covid19Section';
import DidYouKnowSection from './DidYouKnowSection/DidYouKnowSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <>
            <BannerSection />
            <AboutSection />
            <ServicesSection />
            <DidYouKnowSection />
            <Covid19Section />
        </>
    );
};

export default HomePage;