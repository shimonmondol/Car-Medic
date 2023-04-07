import Main from "../../Main/Main";
import About from "../../Pages/Shared/About/About";
import Booking from "../../Pages/Shared/Booking/Booking";
import Contact from "../../Pages/Shared/Contact/Contact";
import Home from "../../Pages/Shared/Home/Home";
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
        path: '/booking/:id',
        element: <Booking></Booking>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
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