import React from "react";
import './nav.css';
import { IoMdList } from "react-icons/io";


export default function Nav() {

    return(
        
        <div className="nav">
            <div className="icon-container">
                <img src="./src/assets/icon.png" alt="" width={20} />
                <p>little Learner</p>
            </div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Academics</li>
                <li>Admissions</li>
                <li>Student Life</li>
                <li>Contact</li>
            </ul>
            <IoMdList className="menue-nav"  />
            
        </div>
    );
}