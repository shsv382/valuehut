import React from "react";
import './hero-banner.styles.scss';

interface HeroBannerTypes {
    imageURL: string,
    title: string,
    children?: any
}

const HeroBanner: React.FC<HeroBannerTypes> = ({ imageURL, title }) => {
    return (
        <div className="hero-banner" style={{backgroundImage: `url(${imageURL})`}}>
            <h1><span>{title}</span></h1>
        </div>
    )
}

export default HeroBanner;