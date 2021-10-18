import React from 'react';

const Service = ({ service }) => {
    return (
        <div style={{ background: 'darkred', color: 'white' }}>
            <h4>{service.name}</h4>
            <img src={service.svgURL} alt="" />
        </div>
    );
};

export default Service;