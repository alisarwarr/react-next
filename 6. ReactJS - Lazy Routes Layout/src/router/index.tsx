//REACT-ROUTER-DOM
import { createBrowserRouter } from "react-router-dom";
//PAGES
import {
    //Layout
    Home, About, Contact, Error,
    //AuthLayout
    Signin, Signup
} from "../pages";
//LAYOUTS
import { Layout, AuthLayout } from "../layouts";
//COMPONENT
import Lazy from "./Lazy";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Lazy children={<Home />} /> },
            { path: "about", element: <Lazy children={<About />} /> },
            { path: "contact", element: <Lazy children={<Contact />} /> }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "signin", element: <Lazy children={<Signin />} /> },
            { path: "signup", element: <Lazy children={<Signup />} /> }
        ]
    },
    {
        path: "*",
        element: <Lazy children={<Error />} />
    }
]);