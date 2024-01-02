import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }
])

export default router;