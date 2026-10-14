import React,{useState} from "react";
import './card.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
    className:string,
    title:string,
    paragraph:string,
    icon?:React.ReactNode,
    stars?:number,
    button?:string
}

export default function Card({ className, title, paragraph, icon, stars, button}:CardProps){
    const [starsNumber,setStarsNumber] = useState(stars || 0);

    return(
        <div className={`${className}`}>
            {icon&& <div className="icon-card">{icon}</div>}
            <p className="title-card"> {title} </p>
            {className ==='academics-card' && 
                <div>
                    {
                        
                        Array.from({ length: (stars||0) }, (_, index) => {
                            const starValue = index + 1;
                            if (starValue <= starsNumber) {
                                return <FaStar key={index} className="star-icon" />;
                            } else if (starValue - 0.5 === starsNumber) {
                                return <FaStarHalfAlt key={index} className="star-icon" />;
                            } else {
                                return <FaRegStar key={index} className="star-icon" />;
                            }
                        })
                    }
                </div>
            }
            {
                className==='navigateThrough-card'&&
                <div className="design-line">
                    <div className="circle circle1"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="circle circle2"></div>
                </div>
            }
            <p className="paragraph-card"> {paragraph} </p>

            {button && <button className="card-button">{button} <FaArrowRight /> </button>}
        </div>
    )
}

