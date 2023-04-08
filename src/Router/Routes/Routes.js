import Main from "../../Main/Main";
import About from "../../Pages/Shared/About/About";
import Booking from "../../Pages/Shared/Booking/Booking";
import Confirm from "../../Pages/Shared/Confirm/Confirm";
import Contact from "../../Pages/Shared/Contact/Contact";
import Home from "../../Pages/Shared/Home/Home";
import Order from "../../Pages/Shared/Order/Order";
import Service from "../../Pages/Shared/Service/Service";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/service',
        element: <Service></Service>
    },
    {
        path: '/order',
        element: <Order></Order>
    },
    {
        path: '/booking',
        element: <Booking></Booking>,
    },
    {
        path: '/order/confirm',
        element: <Confirm></Confirm>,
    },
    {
        path: '/about',
        element: <About></About>  
    },
    {
        path: '/contact',
        element: <Contact></Contact>   
    }
]);

export default router;