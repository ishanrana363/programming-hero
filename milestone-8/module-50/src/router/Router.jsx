import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginFrom from "../component/login-form/LoginFrom";
import RegisterForm from './../component/register/RegisterForm';

export const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        element : <Layout></Layout>,
        children: [
            {
                path: "/register",
                element : <RegisterForm></RegisterForm>
            },
            {
                path: "/login",
                element : <LoginFrom></LoginFrom>
            }
        ]
    }
])