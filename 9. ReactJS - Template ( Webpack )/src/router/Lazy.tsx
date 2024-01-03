//REACT
import React from "react";
//COMPONENTS
import Loader from "../components/Loader";


interface LazyProp {
    children: React.ReactNode
}

export default function Lazy({ children }: LazyProp) {
    return (
        <React.Suspense fallback={<Loader/>}>
            {children}
        </React.Suspense>
    )
}