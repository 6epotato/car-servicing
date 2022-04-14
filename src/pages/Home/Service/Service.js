import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const nevigate = useNavigate();
    const handleNevigatButton = id => {
        nevigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <button onClick={() => handleNevigatButton(id)} className='btn btn-primary'>Book for {name}</button>
        </div>
    );
};

export default Service;