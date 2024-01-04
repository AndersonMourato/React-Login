import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children:[
            {
                path:"sing-in",
                element: <SingIn/>
            },
            {
                path:"sing-up",
                element: <SingUp/>
            },
        ]
    }
])

export default router;