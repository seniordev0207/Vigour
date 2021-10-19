import React from 'react';
import { useHistory } from 'react-router';
import "./Covid19Section.css";
const Covid19Section = () => {
    const history = useHistory();
    return (
        <section className="covid19-section container">
            <h6 className="muted-pill mx-auto">Be Aware of Covid-19</h6>
            <h1 className="text-center">How Corona Virus Spread</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-0 my-5">
                <div className="col p-4">
                    <div className="text-center py-5 px-3">
                        <img src="/images/Covid19/how-spread/handshake.png" alt="handshake" width="80" />
                        <div className="px-3 my-4">
                            <span className="fs-4 fw-bold gradient-text">
                                Spread Mainly From Person to Person
                            </span>
                            <p className="px-4 mt-3">
                                Some spread might be possible before peopleshow symptoms; there have been reports of this occurring
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col p-4">
                    <div className="text-center py-5 px-3">
                        <img src="/images/Covid19/how-spread/cough.png" alt="handshake" width="80" />
                        <div className="px-3 my-4">
                            <span className="fs-4 fw-bold gradient-text">
                                Infected Person Coughs or Sneezes
                            </span>
                            <p className="px-4 mt-3">
                                Some spread might be possible before peopleshow symptoms; there have been reports of this occurring
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col p-4">
                    <div className="text-center py-5 px-3">
                        <img src="/images/Covid19/how-spread/contaminated.png" alt="handshake" width="80" />
                        <div className="px-3 my-4">
                            <span className="fs-4 fw-bold gradient-text">
                                Contaminated Surfaces or Objects
                            </span>
                            <p className="px-4 mt-3">
                                Some spread might be possible before peopleshow symptoms; there have been reports of this occurring
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="gradient-button btn fs-5 px-4"
                    onClick={() => history.push('/covid19')}>
                    Read More At Covid-19 Zone
                </button>
            </div>
        </section >
    );
};

export default Covid19Section;