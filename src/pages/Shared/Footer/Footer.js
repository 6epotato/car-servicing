import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer className='text-center m-5'>
            <p><small>Copyright by Arifur Rahman @ {year} </small></p>
        </footer>
    );
};

export default Footer;