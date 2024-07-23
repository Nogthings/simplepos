import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./containers/GuestLayout";
import AuthLayout from "./containers/AuthLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    { path: "/", element: <GuestLayout />, children: [
       { index: true, element: <Login /> } 
    ] },

    {
        path: '/dashboard', element: <AuthLayout />, children: [
            { index: true, element: <Dashboard /> }
        ]
    }
]);

export default router;