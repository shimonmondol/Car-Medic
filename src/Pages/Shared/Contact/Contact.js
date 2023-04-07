import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <from>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 pl-6 pr-6'>
                    <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                </div>
            </from>
            <div className='pt-6 pr-6 pl-6 pb-4'>
                <textarea className="textarea textarea-secondary w-full pt-8 pb-8" placeholder="Your Message"></textarea>
                <div className='pt-4'>
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;