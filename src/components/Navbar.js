import React from "react";
import logoImage from "../images/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={logoImage} className="nav--logo" />
        </nav>
    )

}