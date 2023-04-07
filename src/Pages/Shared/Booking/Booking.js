import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <Header></Header>
            <h2>{title}</h2>
            <Footer></Footer>
        </div>
    );
};

export default Booking;