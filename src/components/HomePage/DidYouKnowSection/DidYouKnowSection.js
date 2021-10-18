import React from 'react';
import "./DidYouKnowSection.css";

const DidYouKnowSection = () => {
    return (
        <section className="did-you-know-container">
            <div className="row g-0">
                <div className="col-0 col-lg-1 col-xl-2"></div>
                <div className="col-12 col-lg-4 col-xl-4 px-5 px-lg-0 pe-lg-5
                d-flex flex-column justify-content-center">
                    <h6>Did You Know?</h6>
                    <h1 className="my-4">Best laboratory analysis available the biggest distribution network</h1>
                    <p>
                        We help to match each patient’s unique profile to known targeted therapies, immunotherapies and clinical trials.
                    </p>
                    <div className="mt-4">
                        <button className="btn gradient-button px-4">Read more</button>
                    </div>
                </div>
                <div className="col-12 col-lg-7 col-xl-6 d-flex align-items-end">
                    <img className="img-fluid" src="/images/home-DidYouKnow.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default DidYouKnowSection;