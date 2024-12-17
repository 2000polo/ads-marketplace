import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        // loader: rootLoader,
        children: [
            {
                path: "profile",
                Component: Profile,
                // loader: teamLoader,
            },
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login,
            },
            {
                path: "/auth/sign-up",
                Component: SignUp,
            }

        ]
    }
]);

export default router;