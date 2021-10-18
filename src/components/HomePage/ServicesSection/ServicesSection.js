import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

const ServicesSection = () => {
    const services = useServices();
    return (
        <section className="container">
            <h1 className="text-center">Most Demanded Services</h1>
            <div className="services row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 align-items-center my-5">
                {services &&
                    services.map(service => <Service service={service} key={service.id} />)}
            </div>
        </section>
    );
};

export default ServicesSection;