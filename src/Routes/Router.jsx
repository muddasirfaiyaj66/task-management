import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import TaskManager from "../TaskManager/TaskManager.jsx";
import AboutUs from "../Pages/AboutUs.jsx";
import Contact from "../Pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'taskManager',
                element: <PrivateRoute><TaskManager></TaskManager></PrivateRoute>

            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>

            },
            {
                path:'contact',
                element:<Contact></Contact>

            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
]);

export default router;