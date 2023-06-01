import React from "react"
import Logo from '../images/logo.png'

export default function Navbar(){
    return(
        <nav className="nav">
        <img src={Logo} className="nav--logo"/>
       <p>my travel journal.</p>
       </nav>
    );
};