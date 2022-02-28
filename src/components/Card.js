import React from "react";
import Img from "../images/image-katie.png";
import Star from "../images/star.png"


export default function Card(){
    return(
        <div className="card">
            <img src={Img} className="card--image" alt=""/>
            <span className="card--badge">SOLD OUT</span>
            <div className="card--stats">
                <img src={Star} className="card--star" alt=""/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span>/ person</p>
        </div>
        

    )
}