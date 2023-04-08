import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Facebook from '../../../Images/Facebook.svg';
import Twiter from '../../../Images/twitter.svg';
import Linkedin from '../../../Images/linkedin.svg';
import Instagram from '../../../Images/square-instagram.svg';

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
                <textarea className="textarea textarea-secondary w-full pt-4 pb-4" placeholder="Your Message"></textarea>
                <div className='pt-4'>
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
            <div className='align-center'>
                <h1 className='text-3xl font-semibold pl-6 pb-2'> Click to Contact With Social Network</h1>
                <ul className='text-center pb-5'>
                    <li className='flex'>
                        <a href="https://www.facebook.com/"><img className='flex align-items-center justify-content-center pl-6 w-16 h-16' src={Facebook}  alt=''/></a>
                        <a href="https://www.twiter.com/"><img className='flex align-items-center justify-content-center pl-6 w-16 h-16' src={Twiter}  alt=''/></a>
                        <a href="https://www.linkedin.com/"><img className='flex align-items-center justify-content-center pl-6 w-16 h-16' src={Linkedin}  alt=''/></a>
                        <a href="https://www.instagram.com//"><img className='flex align-items-center justify-content-center pl-6 w-16 h-16' src={Instagram}  alt=''/></a>
                    </li>
                
                </ul>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Contact;