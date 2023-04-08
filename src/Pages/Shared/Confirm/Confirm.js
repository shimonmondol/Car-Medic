import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Congratulations from '../../../Images/Congratulations.jpg';

const Confirm = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-16">
                    <img className='pt-10 pl-10 pr-10 w-2/5 h-5/6' src={Congratulations} alt=''/>
                    <div className='text-center pl-10 pr-36'>
                        <h1 className="text-3xl font-bold">Congratulations, Your Order is Confirmed</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Confirm;