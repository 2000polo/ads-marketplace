import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import AppLayout from "../layouts/AppLayout";
import MyAccount from "../pages/MyAccount";
import AddPost from "../pages/AddPost";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/app",
        Component: AppLayout,
        // loader: rootLoader,
        children: [
            {
                path: "/app/profile",
                Component: Profile,
                // loader: teamLoader,
            },
            {
                path: "/app/account",
                Component: MyAccount,
                // loader: teamLoader,
            },
            {
                path: "/app/post-ad",
                Component: AddPost,
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