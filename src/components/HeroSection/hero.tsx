import React from "react";
import './hero.css';
import Image from "./imageContainer/image";
import HeroText from "./containerText/containerHeroText";
import image1 from '../../assets/image1.png';

interface HeroProps {
    image: string,
    paragraph1: string,
    paragraph2: string,
    paragraph2_1: string,
    paragraph3: string
}



export default function Hero(){
    const containerHeroItems:HeroProps ={
        image: image1,
        paragraph1: 'Welcome to little learners academy!',
        paragraph2: 'Where Young Mindes Blossom and ',
        paragraph2_1: 'Dreams Take Flight ',
        paragraph3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt quo dignissimos dicta ex id laboriosam facilis, qui est itaque nulla, quos inventore maxime totam doloremque suscipit. Consectetur, maxime minima."
    }
    return(
        <div className="hero-section">
            <Image image={containerHeroItems.image} />
            <HeroText 
                paragraph1={containerHeroItems.paragraph1}
                paragraph2={containerHeroItems.paragraph2}
                paragraph2_1={containerHeroItems.paragraph2_1}
                paragraph3={containerHeroItems.paragraph3}
            />
        </div>
    );
}

