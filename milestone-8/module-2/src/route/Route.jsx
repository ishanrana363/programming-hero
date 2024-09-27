import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home-page/HomePage";
import AboutPage from "../pages/about-page/AboutPage";
import Users from "../components/Users/Users";
import ContactPage from "../pages/contact-page/ContactPage";
import AllUsers from "../components/all-user/AllUsers";
import SingleUser from "../pages/single-user/SingleUser";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path:"about",
                element : <AboutPage></AboutPage>
            },
            {
                path:"users",
                loader : ()=>fetch(`https://jsonplaceholder.typicode.com/users`),
                element : <Users></Users>
            },
            {
                path:"/user-details/:id",
                loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
                element : <SingleUser></SingleUser>
            },
            {
                path : "contact",
                element : <ContactPage></ContactPage>
            }
        ]
    }
])