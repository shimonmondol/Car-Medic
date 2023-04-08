import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <Header></Header>
            <from>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-6 pt-6 pl-6 pr-6 pb-6'>
                    <input type="text" placeholder="Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" placeholder="Service Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Price" className="input input-bordered w-full" />
                </div>
                <div className='pt-6 pr-6 pl-6 pb-4'>
                <div className='pt-4'>
                <Link to='/service'>
                    <button className="btn btn-success btn-center">Booking For Order</button>
                </Link>  
                </div>
            </div>
            </from>
            
            <Footer></Footer>
        </div>
    );
};

export default Booking;