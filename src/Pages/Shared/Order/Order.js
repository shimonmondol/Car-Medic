import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Confusion from '../../../Images/Confusion.jpg';

const Order = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse pb-16">
                        <img className='pt-10 pl-10 pr-10 w-2/5 h-5/6' src={Confusion} alt=''/>
                        <div className='text-center justify-center pl-10 pr-36'>
                            <h1 className="text-3xl font-bold pb-10">Are You Want to Sure to Confirm Your Order?</h1>
                                <div className="justify-center">
                                    <div className='pb-5'>
                                    <Link to='/order/confirm'>
                                        <button className="btn btn-success btn-center">YES</button>
                                    </Link>   
                                    </div>
                                    <div className='pr-38'>
                                    <Link to='/service'>
                                        <button className="btn btn-error btn-center">NO</button>
                                    </Link>   
                                    </div>
                                     
                                                    
                                </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
            
                
            <Footer></Footer>
        </div>
    );
};

export default Order;