import React from "react";
import './image.css';
import DesinImage from './design/imageDesign'


interface ImageProps {
    image: string;
}

export default function Image({ image }: ImageProps) {
    return(
        <div className="image-container">
            <img src={image} alt="image1 "  />
            {/* <img src="./src/assets/image1.png" alt="asfd" /> */}
            <DesinImage />
        </div>
    );
}
