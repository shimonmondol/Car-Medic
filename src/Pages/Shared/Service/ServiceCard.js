import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {service_id, img, price, title} = service;
    return (
        <div className="card card-compact justify-end grid gap-2 w-80 shadow-2xl">
  <figure><img className='w-3/4' src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-2xl card-title justify-center">{title}</h2>
    <h2 className='text-xl pl-16 pb-3'>Price: $ {price}</h2>
    <div className="card-actions justify-center">
      <Link to={`/booking/${service_id}`}>
          <button className="btn btn-primary btn-center">Order Now</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default ServiceCard;