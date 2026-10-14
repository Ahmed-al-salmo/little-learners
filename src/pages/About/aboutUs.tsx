import React from 'react'
import './aboutUs.css'
import TopBannerOfPage from '../../components/topBannerOfPages/topBannerPage';
import Card from '../../components/card/card';
import { FaGraduationCap } from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";
import { FaMaskFace } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";


interface CardType {
    title:string,
    paragraph:string,
    icon?:React.ReactNode,
}

export default function AboutUs() {
    const topBannerData ={
        BTN:'Children Deserve Bright Future',
        title:'Our Benefits',
        paragraph:'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child\'s future.'
    }
    const cards:CardType[] = [
        {
            title:'Holistic Learning Approach',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            icon:<FaGraduationCap/>,
        },
        {
            title:'Experienced Educators',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            icon:<GiChessQueen/>,
        },
        {
            title:'Nurturing Environment',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            icon:<FaMaskFace/>,
        },
        {
            title:'Play-Based Learning',
            paragraph:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
            icon:<FaFlag/>,
        },
        {
            title:'Parent Involvement',
            paragraph:'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
            icon:<FaUserFriends/>,
        },
    ]

    return(
        <div className='aboutus-container'>
            <TopBannerOfPage 
                button={topBannerData.BTN}
                title={topBannerData.title}
                paragraph={topBannerData.paragraph}
            />
            <div className='card-about-container'>
                {
                    cards.map((item,index)=>(
                        <Card 
                            key={index}
                            className='about-card'
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    );
}
