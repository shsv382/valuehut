import { url } from "inspector";
import React from "react";
import './client-box.styles.scss';
import { TrainingTypes } from '../../training';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PreviousClientsTypes } from '../../content';

interface ClientBoxTypes extends PreviousClientsTypes {
    children?: any
}

const ClientBox: React.FC<ClientBoxTypes> = ({name, imageURL}) => {
    return (
        <div className="client-box">
                <img
                    className="client-box__image-content"
                    alt={`${name}`}
                    src={`images/clients/${imageURL}`}
                />
                <h3 className="client-box__text-content">
                    { name }
                </h3>
        </div>
    )
}

export default ClientBox;
