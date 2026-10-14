import React,{useState} from "react";
import "./quationCard.css"

interface QuationCardType{
    quation:string,
    answer:string
    onclick?: (item:QuationCardType) => void
}

export default function QuationCard({quation, answer,onclick}:QuationCardType){
    const [isShow, setIsShow] = useState(false);
    return(
        <div className="quationCard" style={{backgroundColor:isShow?'#fff':"transparent"}}>
            <div  className="quationCard-content">
                <p>{quation} ? </p>
                {isShow &&<p><hr />{answer}</p>}
                
            </div>
            <div onClick={()=>setIsShow(!isShow) } className="BTN-showORhide">
                {isShow? '-':'+'}
            </div>
        </div>
    );
}
