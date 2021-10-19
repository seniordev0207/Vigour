import React from 'react';
import { useHistory } from 'react-router';
import "./Service.css";

const Service = ({ service }) => {
    const history = useHistory();
    const { id, name, features, svgURL, themeColor } = service;
    return (
        <>
            <div className="col p-3">
                <div className="service p-2 bg-white position-relative">
                    <div className="service-img-container mt-4 mx-auto
                     d-flex justify-content-center align-items-center"
                        style={{ background: themeColor, borderColor: themeColor }}>
                        <img src={svgURL} alt={name} />
                    </div>
                    <div className="card-body my-3">
                        <h1 className="h4 text-center">{name}</h1>
                        <div className="ps-2 ps-lg-4 pe-2 my-4">{
                            features.map((feature, index) => index < 5 &&
                                <p className="my-2" key={index}>
                                    <i className="fas fa-check-circle" style={{ color: themeColor }}></i> {feature}
                                </p>)
                        }</div>
                        <button onClick={() => history.push(`/service/${id}`)}
                            className="service-btn w-100 border-0 text-white px-4 py-2 rounded-3"
                            style={{ background: themeColor }}>Learn More</button>
                    </div>
                    <div className="service-shadow" style={{ background: themeColor }}></div>
                </div>
            </div>
        </>
    );
};

export default Service;