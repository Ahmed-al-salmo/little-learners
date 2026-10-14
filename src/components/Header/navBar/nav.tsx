import React,{useState} from "react";
import './nav.css';
import { IoMdList } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

interface NavProps{
    title:string
}

export default function Nav({navLinks}:{navLinks:NavProps[]}) {
    const [isShow,setIsShow] = useState(false)
    return(
        
        <div className="nav">
            <div className="icon-container">
                <img src="./src/assets/icon.png" alt="" width={20} />
                <p>little Learner</p>
            </div>
            <ul className="navBar-ul">
                {
                    navLinks.map((item,index)=>{
                        return<li key={index}>{item.title}</li>
                    })
                }
                
            </ul>

            <IoMdList className="menue-nav" onClick={()=>setIsShow(true)} />
            <div className="menue-nav-list" style={{transform:isShow? 'translateX(0%)':''}} >
                <ul className="menue-nav-list-ul">
                    <FaArrowRight className="icon" onClick={()=>setIsShow(false)} /> 
                    {
                        navLinks.map((item,index)=>{
                            return<li key={index}>{item.title}</li>
                        })
                    }
                    
                </ul>
            </div>
        </div>
    );
}

