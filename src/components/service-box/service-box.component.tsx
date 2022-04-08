import React from "react";
import './service-box.styles.scss';

type ServiceBoxTypes = {
    title: string,
    description?: string,
    iconURL?: string,
    backgroundImageURL?: string,
    children?: any
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({title, description, iconURL, backgroundImageURL}: ServiceBoxTypes) => {
    return (
        <div className="service-box-container" style={{backgroundImage: backgroundImageURL}}>
            <div className="service-box">
                <h3>{title}</h3>
                <img src={iconURL} />
            </div>
        </div>
    )
}

export default ServiceBox;