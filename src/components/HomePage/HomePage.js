import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import Covid19Section from './Covid19Section/Covid19Section';
import DidYouKnowSection from './DidYouKnowSection/DidYouKnowSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <>
            <section className="pb-0 mb-5"
                style={{ background: "linear-gradient(105deg,#fff0cc,#fbd9e2)" }}>
                <div className="ps-lg-5">
                    <div className="row row-cols-1 row-cols-lg-2 g-0">
                        <div className="d-flex flex-column justify-content-center ps-lg-5 px-4 py-5">
                            <h1 className="display-2">The next generation of health care</h1>
                            <p className="fs-4">An extraordinary care for patients</p>
                            <div className="px-2">
                                <button className="btn fs-5 fw-bold gradient-button px-4 py-2">Learn More</button>
                            </div>
                        </div>
                        <div className="pt-5">
                            <img src="/images/home-1.svg" alt="doctor-patient" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <BannerSection />
            <AboutSection />
            <ServicesSection />
            <DidYouKnowSection />
            <Covid19Section />
        </>
    );
};

export default HomePage;