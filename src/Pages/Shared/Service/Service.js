import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Service = () => {
    const [service, setServices] = useState([]);
    useEffect (() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))       
    },[])
    return (
        <div>
            <Header></Header>
            <div className='text-center mb-4 pt-5'>
                <h2 className='text-5xl font-semibold pb-4'>Our Service Area</h2>
                <p>Automotive repairs, services and car deals</p>
            </div>
            <div className='grid gap-12 grid-cols-2 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16'>
                {
                    service.map(service=> <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;