import React, { useState } from "react";
import './academics.css'
import TopBannerOfPage from '../../components/topBannerOfPages/topBannerPage';
import Card from "../../components/card/card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

interface CardType {
    title:string,
    stars?:number,
    paragraph:string,
    icon?:React.ReactNode,
}


export default function Academics(){
    let size = window.innerWidth;
    let count = size<=576? 1:size<=992? 2:3
    const [startAt,setStartAt]= useState(0);
    const [endAt, setEndAt]=useState(count)

    const topBannerData ={
        BTN:'Their Happy Words 🤗',
        title:'Our Testimonials',
        paragraph:'Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'
    }

    const cards:CardType[] = [
        {
            title:'Jennifer B',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            stars:5,
            icon:<FaUser/>,
        },
        {
            title:'David K',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            stars:3,
            icon:<FaUser/>,
        },
        {
            title:'Emily L',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            stars:4 ,
            icon:<FaUser/>,
        },
        {
            title:'Play-Based Learning',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            stars:4 ,
            icon:<FaUser/>,
        },
        {
            title:'Parent Involvement',
            paragraph:'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
            stars:4 ,
            icon:<FaUser/>,
        },
    ]

    const moveLeft =()=>{
        if(startAt!==0){
            setStartAt(startAt-1);
            setEndAt(endAt-1)
        }
    }

    const moveRight =()=>{
        if(cards.length>endAt){
            setStartAt(startAt+1);
            setEndAt(endAt+1)
        }
    }

    return(
        <div className="academics-container">
            <TopBannerOfPage 
                button={topBannerData.BTN}
                title={topBannerData.title}
                paragraph={topBannerData.paragraph}
            />
            <div className="card-academics-container">
                <FaArrowLeft className="arrow-icon left-arrow"  onClick={moveLeft} />
                <div className="card-academics-wrapper">
                {
                    cards.map((item,index)=>(
                        
                        index-startAt < count && index>= startAt && index<=endAt&&
                        <Card 
                            key={index}
                            className='academics-card'
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}
                            stars={item.stars}
                        />
                    ))
                }</div>
                <FaArrowRight className="arrow-icon right-arrow" onClick={moveRight} />
            </div>
        </div>
    )
}
