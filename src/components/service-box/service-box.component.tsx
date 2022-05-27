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
                className="link service-box" 
                style={{backgroundImage: imageURL}}>
            <Card sx={{ maxWidth: 345, position: 'relative' }} className="service-box__content">
                <CardMedia
                    className="service-box__image-content"
                    component="img"
                    alt={`${header}`}
                    height="140"
                    image={`images/${imageURL}`}
                />
                <CardContent className="service-box__text-content">
                    <Typography gutterBottom variant="h5" component="div">
                    { header }
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                    { description }
                    </Typography> */}
                </CardContent>
                {/* <CardActions className="service-box__actions">
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Link>
    )
}

export default ServiceBox;
