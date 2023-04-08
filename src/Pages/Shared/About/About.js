import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Company from '../../../Images/Company.jpg';
import Mission from '../../../Images/Mission.jpg';
import Vision from '../../../Images/Vision.jpg';

const About = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='pt-10 pb-10 font-bold text-5xl text-center'>Our Company</h1>
            <img className='w-full pl-10 pr-10 pb-4' src={Company} alt=''/>
            <h1 className='pt-5 pb-5 font-semibold text-3xl text-center'>Our Story</h1>
            <h1 className='font-semibold text-xl text-center pl-10 pr-10 pb-12'>It was in 2002, with little capital but a pocketful of belief our CEO started Car Medic, a car servicing company. The new company initially focused on the international market with the local market added in 2010. Since then the company has shown a continuous growth and currently employs over 300+. Car Medic is in countries like the USA, UK, Netherlands, Denmark, Japan, Norway, Sweden, Germany, Canada, Switzerland, Turkey and the Middle East etc.</h1>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-12">
                    <img className='pl-10 pr-10 w-2/5 h-5/6' src={Mission} alt=''/>
                    <div className='text-center pl-10 pr-36'>
                        <h1 className="text-3xl font-semibold">Our Mission</h1>
                        <p className="py-6">Treat our customers and their cars with the highest regard and to offer superior customer relations, keep open lines of communication with our customers to ensure that their cars are diagnosed and repaired correctly and efficiently, and to address any and all customer concerns.</p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-16">
                    <img className='pl-10 pr-10 w-2/5 h-1/6' src={Vision} alt=''/>
                    <div className='text-center pl-10 pr-36'>
                        <h1 className="text-3xl font-semibold">Our Vision</h1>
                        <p className="py-6">we strongly believe in catering our Customers with Quality Service and Endeavour to continue with innovative and customised business model which benefits all stake holders. We constantly focus on adapting to new ways and means to improve our services.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;