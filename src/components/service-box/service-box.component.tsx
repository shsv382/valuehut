import { url } from "inspector";
import React from "react";
import './service-box.styles.scss';
import { TrainingTypes } from '../../training';
import { Link } from 'react-router-dom';

interface ServiceBoxTypes extends TrainingTypes {
    children?: any
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({title, acronym, description, iconURL, iconBorder, imageURL}) => {
    return (
        <Link   to={title.toLowerCase().split(" ").join("-")} 
                className="link service-box" 
                style={{backgroundImage: imageURL}}>
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
        </Link>
    )
}

export default ServiceBox;