//NEXTJS
import dynamic from "next/dynamic";


export const Header = dynamic(() => import("./Header"));
export const Footer = dynamic(() => import("./Footer"));