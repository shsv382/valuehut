import { url } from "inspector";
import React from "react";
import './service-box.styles.scss';

type ServiceBoxTypes = {
    title: string,
    acronym?: string,
    description?: string,
    iconURL?: string,
    iconBorder?: string,
    backgroundImageURL?: string,
    price?: number,
    children?: any
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({title, acronym, description, iconURL, iconBorder, backgroundImageURL}: ServiceBoxTypes) => {
    return (
        <div className="service-box" style={{backgroundImage: backgroundImageURL}}>
            <div className="service-box__content">
                {
                    iconURL ?
                    <img className="service-box__icon" src={ iconURL } /> :
                    <div className="service-box__icon service-box__icon-bordered"
                         style={{backgroundImage: `url(${iconBorder})`}}>
                             <p className="service-box__icon-bordered__acronym">{acronym}</p>
                    </div>
                } 
                <h3 className="service-box__title"><span className="service-box__title__slash">/</span> {title}</h3>  
            </div>
        </div>
    )
}

export default ServiceBox;