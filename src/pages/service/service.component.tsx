import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../training';

interface ServiceTypes extends TrainingTypes {
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ title }) => {
    return (
        <div className='page service-page appearancable'>
            <h1>{title}</h1>
        </div>
    )
}

export default Service;