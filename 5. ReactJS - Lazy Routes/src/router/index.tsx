//REACT-ROUTER-DOM
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
//PAGES
import { Home, About, Contact, Error } from "../pages";
//COMPONENT
import Lazy from "./Lazy";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Lazy children={<Home />} />} />
            <Route path="/about" element={<Lazy children={<About />} />} />
            <Route path="/contact" element={<Lazy children={<Contact />} />} />
            <Route path="*" element={<Lazy children={<Error />} />} />
        </>
    )
);