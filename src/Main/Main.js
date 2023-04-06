import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Home from '../Pages/Shared/Home/Home';


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;