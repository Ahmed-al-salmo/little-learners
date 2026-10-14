import React from "react";


interface SubContainerDataType {
    amount: string;
    about: string;
}

export default function SubContainer( {SubContainerData} : { SubContainerData: SubContainerDataType[] } ) {
    // console.log(SubContainerData);
    let size = window.innerWidth

    return(
        <div className="sub-container">
            {SubContainerData.map((item, index) => (
                (size <= 576 && index === 1) ?
                <div key={index} className="sub-item">
                    <hr style={{margin:'10px 10px'}} />
                    <p>{item.amount}</p>
                    <p className="sub-container-about">{item.about}</p>
                    <hr style={{margin:'10px 10px'}} />
                </div>:<div key={index} className="sub-item">
                    
                    <p>{item.amount}</p>
                    <p className="sub-container-about">{item.about}</p>
                    
                </div>
            ))}
        </div> 
    )
}
