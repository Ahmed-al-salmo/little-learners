import React from "react";
import './containerHeroText.css';
import SubContainer from "./subContainer";

interface HeroTextProps {
    paragraph1: string;
    paragraph2: string;
    paragraph2_1: string;
    paragraph3: string;
}

interface SubContainerDataType {
    amount: string;
    about: string;
}

export default function HeroText({paragraph1,paragraph2,paragraph2_1,paragraph3 }: HeroTextProps) {

    const SubContainerData:SubContainerDataType[] = [
        {
            amount:'+7000',
            about:'Students passed out'
        },
        {
            amount:'+37',
            about:'Awards & Recognitions'
        },
        {
            amount:'+15',
            about:'Experience Educators'
        },
        
    ]

    return(
        <div className="container-hero-text">
            <p className="paragraph1">{paragraph1}</p>
            <h3 className="h3">
                {paragraph2}
                <span>{paragraph2_1}</span>
            </h3>
            <p className="paragraph3">{paragraph3}</p>
            <SubContainer SubContainerData={SubContainerData} />
        </div>
    );
}


