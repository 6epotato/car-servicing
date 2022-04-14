import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    return (
        <div>
            <h2>Wellcome to detail {serviceID}</h2>
            <div className='text-center'>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary' > procced for booking</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;