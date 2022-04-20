import { url } from "inspector";
import React from "react";
import './service-box.styles.scss';
import { TrainingTypes } from '../../training';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ServiceBoxTypes extends TrainingTypes {
    children?: any
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({title, acronym, description, iconURL, iconBorder, imageURL}) => {
    return (
        <Link   to={title.toLowerCase().split(" ").join("-")} 
                className="link service-box" 
                style={{backgroundImage: imageURL}}>
            <Card sx={{ maxWidth: 345, position: 'relative' }} className="service-box__content">
                <CardMedia
                    className="service-box__image-content"
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={imageURL}
                />
                <CardContent className="service-box__text-content">
                    <Typography gutterBottom variant="h5" component="div">
                    { title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="details">
                    { description }
                    </Typography>
                </CardContent>
                <CardActions className="service-box__actions">
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            {/* <div className="service-box__content">
                {
                    iconURL ?
                    <img className="service-box__icon" src={ iconURL } /> :
                    <div className="service-box__icon service-box__icon-bordered"
                         style={{backgroundImage: `url(${iconBorder})`}}>
                             <p className="service-box__icon-bordered__acronym">{acronym}</p>
                    </div>
                } 
                <h3 className="service-box__title"><span className="service-box__title__slash">/</span> {title}</h3>  
            </div> */}
        </Link>
    )
}

export default ServiceBox;
