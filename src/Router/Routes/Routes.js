import Main from "../../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>
    }
]);

export default router;