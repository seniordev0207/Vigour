import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

const ServicesSection = () => {
    const services = useServices();
    return (
        <section className="container">
            <h1 className="text-center">Most Demanded Services</h1>
            <div>
                {services &&
                    services.map(service => <Service service={service} />)}
            </div>
        </section>
    );
};

export default ServicesSection;