import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Shared/Home/Home';


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Home></Home>
        </div>
    );
};

export default Main;