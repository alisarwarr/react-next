//REACT-ROUTER-DOM
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
//PAGES
import { Home, About, Contact, Error } from "../pages";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </>
    )
);