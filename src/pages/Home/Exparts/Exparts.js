import React from 'react';
import expart1 from "../../../images/Exparts/expert-1.jpg"
import expart2 from "../../../images/Exparts/expert-2.jpg"
import expart3 from "../../../images/Exparts/expert-3.jpg"
import expart4 from "../../../images/Exparts/expert-4.jpg"
import expart5 from "../../../images/Exparts/expert-5.jpg"
import expart6 from "../../../images/Exparts/expert-6.png"
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: "Driver", img: expart1 },
    { id: 2, name: "Mali", img: expart2 },
    { id: 3, name: "Chakor", img: expart3 },
    { id: 4, name: "radhuni", img: expart4 },
    { id: 5, name: "Firniwala", img: expart5 },
    { id: 6, name: "Hoker", img: expart6 }

]


const Exparts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Exparts</h1>
            <div className='row '>
                {
                    experts.map(expert => <Expart key={expert.id} expert={expert}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;