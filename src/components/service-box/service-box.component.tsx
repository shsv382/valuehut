import { url } from "inspector";
import React from "react";
import './service-box.styles.scss';
import { TrainingTypes } from '../../data/training';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ServiceBoxTypes {
    header: string, 
    description: string,
    url: string, 
    imageURL: string,
    children?: any
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({header, description, imageURL, url}) => {
    return (
        <Link   to={url} 
                className="link service-box">
            <div className="link service-box__content" style={{backgroundImage: `url(/images/${imageURL})`}}>
                <h2 className="service-box__header">{ header }</h2>
            </div>
        </Link>
    )
}

export default ServiceBox;
