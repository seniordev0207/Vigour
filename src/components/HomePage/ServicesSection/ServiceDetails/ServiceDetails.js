import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const services = useServices();
    const { name, features, imgURL, themeColor } = services ? services[serviceID - 1] : {};
    return (
        !services ? null :
            <section className="container d-flex flex-column align-items-center">
                <small>services / {name}</small>
                <img src={imgURL} alt="" width="700" className="rounded-3 shadow-lg" />
                <h1 className="mt-5 mb-4" style={{ color: themeColor }}>{name}</h1>
                <p>{
                    features.map(feature => <h4 className="ps-5">
                        <i className="fas fa-check-circle" style={{ color: themeColor }}></i>
                        <span className="mx-3">{feature}</span>
                    </h4>)
                }</p>
            </section>
    );
};

export default ServiceDetails;