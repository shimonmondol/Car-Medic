import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-blue-700">
  <div className="flex-1">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href = "/">Home</a></li>
        <li><a href = "/">Service</a></li>
        <li><a href = "/">Booking</a></li>
        <li><a href = "/">About</a></li>
        <li><a href = "/">Contact</a></li>
      </ul>
    </div>
    <a href = "/" className="btn btn-ghost text-white normal-case text-3xl">CAR MEDIC</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><a href = "/">Home</a></li>
      <li><a href = "/">Service</a></li>
      <li><a href = "/">Booking</a></li>
      <li><a href = "/">About</a></li>
      <li><a href = "/">Contact</a></li>
    </ul>
  </div>
</div>
    );
};

export default Header;