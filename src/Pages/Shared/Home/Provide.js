import React from 'react';
import Provide1 from '../../../Images/Provide1.jpg';
import Provide2 from '../../../Images/Provide2.jpg';
import Provide3 from '../../../Images/Provide3.jpg';

const Provide = () => {
    return (
        
        <div>
            <h1 className='text-center text-3xl font-semibold pb-6'>Here We Provide</h1>
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16'>
                <div className="card card-compact justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Provide1} alt=''/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-xl'>Full Servicing a Car</h1>
                    </div>
                </div>
                <div className="card card-compact justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Provide2} alt=''/>
                    </figure>
                    <div className="card-body items-center text-center">
                    <h1 className='text-xl'>Sell Car Parts</h1>
                    </div>
                </div>
                <div className="card card-compact justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Provide3} alt=''/>
                    </figure>
                    <div className="card-body items-center text-center">
                    <h1 className='text-xl'>Used Car Sell</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Provide;