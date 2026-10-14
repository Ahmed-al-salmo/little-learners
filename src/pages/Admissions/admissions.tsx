import React from "react";
import './admissions.css'
import TopBannerOfPage from "../../components/topBannerOfPages/topBannerPage";
import QuationCard from "../../components/quationCard/quationCard";

interface QuationCardType{
    quation:string,
    answer:string
}


export default function Admissions(){

    const topBannerData ={
        BTN:'Solutions For The Doubts',
        title:'Frequently Asked Questions',
        paragraph:'Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child\'s education.'
    }
    const quations:QuationCardType[] = [
        {
            quation:'quation 1',
            answer:'answer 1'
        },
        {
            quation:'quation 2',
            answer:'answer 2'
        },
        {
            quation:'quation 3',
            answer:'answer 3'
        },
        {
            quation:'quation 4',
            answer:'answer 4'
        },
        {
            quation:'quation 5',
            answer:'answer 5'
        },
    ]

    const handleQuationClick = (item:{}) => {
        console.log(item)
    }

    return(
        <div className="admissions-container">
            <TopBannerOfPage
                button={topBannerData.BTN}
                title={topBannerData.title}
                paragraph={topBannerData.paragraph}
            />

            <div className="quationCard-container">
                {
                    quations.map((quation,index)=>{
                        return(
                            <QuationCard 
                                key={index}
                                quation={quation.quation}
                                answer={quation.answer}
                                // onclick={() => handleQuationClick(quation)}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
