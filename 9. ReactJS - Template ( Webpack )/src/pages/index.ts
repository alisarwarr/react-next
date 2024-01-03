//REACT
import React from "react";


//Layout
export const Home = React.lazy(() => import("./Home"));
export const About = React.lazy(() => import("./About"));
export const Contact = React.lazy(() => import("./Contact"));
export const Error = React.lazy(() => import("./Error"));
//AuthLayout
export const Signin = React.lazy(() => import("./Signin"));
export const Signup = React.lazy(() => import("./Signup"));