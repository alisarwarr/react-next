//REACT
import React from "react";
//PAGES
import { Home } from "./pages";


export default function App() {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Home />
        </React.Suspense>
    )
}