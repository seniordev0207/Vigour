import React from 'react';
import { useHistory } from 'react-router';
import "./CovidPage.css";

const CovidPage = () => {
    const history = useHistory();
    return (
        <main>
            <div className="covid-banner" style={{ background: "url(/images/Covid19/covid19-background.jpg) center/cover no-repeat" }}>
                <div>
                    <div className="row row-cols-1 row-cols-lg-2 g-0 justify-content-between">
                        <div className="left-col d-flex flex-column justify-content-center py-5 text-white">
                            <h1 className="fs-4">CORONAVIRUS DISEASE</h1>
                            <div className="display-4 fw-bold">COVID-19 OUTBREAK</div>
                            <h6 className="mb-4 mt-3">
                                Maintain safety rules to stay safe from covid-19 epidemic.
                            </h6>
                            <div>
                                <button className="btn btn-danger fs-5 px-3" onClick={() => history.push('/signup')}>Sign Up</button>
                                <button className="btn btn-danger fs-5 mx-4 px-3" onClick={() => history.push('/login')}>Login</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-end">
                            <img src="/images/Covid19/covid19-img.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-lg-2 g-0 align-items-center">
                    <div className="my-5 my-lg-0 text-center">
                        <img src="/images/Covid19/covid19-symptoms.png" alt="" className="img-fluid" />
                    </div>
                    <div>
                        <h1>
                            <span className="gradient-text fw-bold">Corona Virus Symptoms</span>
                        </h1>
                        <p className="px-2 my-3">
                            The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. Another factor is whether the spread is sustained, spreading continually without stopping.
                        </p>
                        <div className="row row-cols-2 g-0 fs-5 fw-bold text-danger">
                            <div className="px-3">
                                <ul>
                                    <li>Fever</li>
                                    <li>Cough</li>
                                    <li>Shortness of Breath</li>
                                    <li>Trouble Breathing</li>
                                </ul>
                            </div>
                            <div className="px-3">
                                <ul>
                                    <li>Persistent Pain</li>
                                    <li>Inability to Arouse</li>
                                    <li>Bluish Lips or Face</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-0 align-items-center">
                    <div className="pe-lg-5">
                        <h1>
                            <span className="gradient-text fw-bold">Are You At Higher Risk For Severe Illness?</span>
                        </h1>
                        <p className="px-2 my-4">
                            Based on currently available information and clinical expertise, older adults and people of any age who have serious underlying medical conditions might be at higher risk for severe illness from COVID-19.
                            <br /> <br />
                            COVID-19 is a new disease and there is limited information regarding risk factors for severe disease.
                        </p>
                        <div className="row row-cols-2 g-4">
                            <div className="p-3">
                                <div className="d-flex justify-content-start align-items-center shadow-lg px-2 py-4 rounded-3">
                                    <div className="px-3">
                                        <img src="/images/Covid19/high-risk/older-adults.png" className="img-fluid rounded-start" alt="older-adult" />
                                    </div>
                                    <div className="text-start">
                                        <span className="gradient-text fw-bold fs-5 m-0">Older Adults</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-start align-items-center shadow-lg px-2 py-4 rounded-3">
                                    <div className="px-3">
                                        <img src="/images/Covid19/high-risk/hiv.png" className="img-fluid rounded-start" alt="hiv" />
                                    </div>
                                    <div className="text-start">
                                        <span className="gradient-text fw-bold fs-5 m-0">People With HIV</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-start align-items-center shadow-lg px-2 py-4 rounded-3">
                                    <div className="px-3">
                                        <img src="/images/Covid19/high-risk/man.png" className="img-fluid rounded-start" alt="man" />
                                    </div>
                                    <div className="text-start">
                                        <span className="gradient-text fw-bold fs-5 m-03">Asthma Affected</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-start align-items-center shadow-lg px-2 py-4 rounded-3">
                                    <div className="px-3">
                                        <img src="/images/Covid19/high-risk/pregnant.png" className="img-fluid rounded-start" alt="pregnant" />
                                    </div>
                                    <div className="text-start">
                                        <span className="gradient-text fw-bold fs-5 m-0">Pregnant Woman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-lg-5 text-center my-5 my-lg-0">
                        <img src="/images/Covid19/covid19-safety.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CovidPage;