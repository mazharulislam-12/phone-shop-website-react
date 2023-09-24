import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element:
            <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favorites',
                element: 
            }
        ]
    }
])
    

export default myCreateRouter;