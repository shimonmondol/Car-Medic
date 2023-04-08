import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import images1 from '../../../Images/images 1.jpg';
import Banner from '../Banner/Banner';
import Provide from './Provide';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img className='w-1/2' src={images1} alt=''/>
            <div className='pl-10'>
              <h1 className="text-3xl font-bold">Car Repair</h1>
              <p className="py-6">A motor vehicle tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has traveled a certain level distance. The intervals are specified by the vehicle manufacturer in the schedule and some modern cars display the due date for electronically on the instrument panel.</p>
            </div>
          </div>
        </div>

        
        <Provide></Provide>  
        <Footer></Footer>
        </div>
  );
};

export default Home;