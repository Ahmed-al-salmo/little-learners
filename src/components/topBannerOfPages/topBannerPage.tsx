import React from "react";
import './topBannerPage.css'

interface TopBannerProps{
    button:string,
    title:string,
    paragraph:string,
}
export default function TopBannerOfPage({button, title, paragraph}:TopBannerProps){
    return(
        <div className="topBannerPage-container">
            <button>{button}</button>
            <h4> {title} </h4>
            <p> {paragraph} </p>
        </div>
    )
}
