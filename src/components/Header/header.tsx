import React from "react";
import "./header.css";
import TopBanner from "./topBanner/topBanner";
import Nav from "./navBar/nav";

export default function Header() {
    const navLinks =[
        {
            title:'Home'
        },
        {
            title:'About Us'
        },
        {
            title:'Academics'
        },
        {
            title:'Admissions'
        },
        {
            title:'Student Life'
        },
        {
            title:'Contact'
        },
    ]
    return(
        <header className="header">
            <TopBanner />
            <Nav navLinks={navLinks} />
        </header>
    );
}