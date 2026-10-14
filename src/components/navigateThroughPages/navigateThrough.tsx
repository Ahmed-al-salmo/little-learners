import React from "react";
import './navigateThrough.css'

import TopBannerOfPage from "../topBannerOfPages/topBannerPage";
import Card from "../card/card";

interface CardType {
    title:string,
    paragraph:string,
    icon?:React.ReactNode,
    button?:string
}

export default function NavigateThrough(){
    const topBannerData ={
        BTN:'Explore More',
        title:'Navigate through our Pages',
        paragraph:'Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.',

    }

    const cards:CardType[] = [
        {
            title:'About Us',
            paragraph:'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.',
            button:'learn more',
        },
        {
            title:'Academics',
            paragraph:'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',
            button:'learn more',
        },
        {
            title:'Admissions',
            paragraph:'Learn about our Enrollment Process and how to secure your child\'s place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.',
            button:'learn more',
        },
        {
            title:'Student Life',
            paragraph:'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',
            button:'learn more',
        },
        
    ]

    return(
        <div className="navigateThrough-container">
            <TopBannerOfPage
                button={topBannerData.BTN}
                title={topBannerData.title}
                paragraph={topBannerData.paragraph}
            />
            <div className="card-navigateThrough-container">
                {
                    cards.map((card,index)=>{
                        return(
                            <Card 
                                key={index}
                                className='navigateThrough-card'
                                title={card.title}
                                paragraph={card.paragraph}
                                button={card.button}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}


