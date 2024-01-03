interface AuthLayoutProp {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProp) {
    return (
        <div> AuthLayout {children} </div>
    )
}