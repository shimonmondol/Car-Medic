import React from 'react';
import images1 from '../../../Logo/images 1.jpg';

const Home = () => {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img className='w-1/2' src={images1} alt=''/>
    <div className='pl-10'>
      <h1 className="text-3xl font-bold">Car Repair</h1>
      <p className="py-6">A motor vehicle tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has traveled a certain level distance. The intervals are specified by the vehicle manufacturer in the schedule and some modern cars display the due date for electronically on the instrument panel.</p>
      <button className="btn btn-primary">Interested</button>
    </div>
  </div>
</div>
    );
};

export default Home;