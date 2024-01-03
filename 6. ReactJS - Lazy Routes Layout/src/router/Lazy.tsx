//REACT
import React from "react";


interface LazyProp {
    children: React.ReactNode
}

export default function Lazy({ children }: LazyProp) {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            {children}
        </React.Suspense>
    )
}