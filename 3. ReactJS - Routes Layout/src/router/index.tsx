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


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "signin", element: <Signin /> },
            { path: "signup", element: <Signup /> }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]);