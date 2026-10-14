import React from "react";
import './footer.css'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaSignalMessenger } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Copyright © [2023] Little Learners Academy. All rights reserved.


export default function Footer(){

    return(
        <div className="footer-container">
            <div className="sub-container1">
                <div className="logo-container">
                    <h4 className="logo">
                        <img src="./src/assets/icon2.png" alt="" height={40} />
                        
                    </h4>
                    <p>We believe in the power of play to foster creativity, problem solving skills, and imagination.</p>
                    <div className="phone-number "> <div className="icon"><FaPhone /></div> +91 91813 23 2309</div>
                    <div className="location"> <div className="icon"><FaLocationDot /></div> Somewhere in the World</div>
                    <div className="email"> <div className="icon"><MdEmail /></div> hello@littlelearners.com</div>
                </div>
                <div className="footer-home">
                    <h4>Home</h4>
                    <p>Features</p>
                    <p>Our Testimonials</p>
                    <p>FAQ</p>
                </div>
                <div className="footer-aboutus">
                    <h4>About Us</h4>
                    <p>Our Mission</p>
                    <p>Our Vission</p>
                    <p>Awards and Recognitions</p>
                    <p>History</p>
                    <p>Teachers</p>
                </div>
                <div className="footer-academics">
                    <h4>Academics</h4>
                    <p>Special Features</p>
                    <p>Gallery</p>
                    
                </div>
                <div className="footer-Contact">
                    <h4>Contact Us</h4>
                    <p>Information</p>
                    <p>Map & Direction</p>
                    
                </div>
            </div>
            <hr />
            <div className="sub-container2">
                <div>
                Terms of Service  |  Privacy Policy  |  Cookie Policy
                </div>
                <div className="sub-container2-icon">
                    <div > <FaFacebook /> </div>
                    <div> <FaTwitter /> </div>
                    <div> <FaLinkedin /> </div>
                </div>
            </div>
            <hr />
            <div className="sub-container3">
                Copyright © [2023] Little Learners Academy. All rights reserved.
            </div>
        </div>
    )
}

