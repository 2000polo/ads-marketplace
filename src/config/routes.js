import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/app",
        Component: App,
        // loader: rootLoader,
        children: [
            {
                path: "/app/profile",
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
                Component: LoginForm,
            },
            {
                path: "/auth/sign-up",
                Component: SignUpForm,
            }

        ]
    }
]);

export default router;