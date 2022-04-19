import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../training';
import ServiceArticle from '../../components/service-article/service-article.component';

interface ServiceTypes extends TrainingTypes {
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ title, description, whatWillILearn, whoShouldAttend }) => {
    return (
        <div className='page service-page appearancable'>
            <h1 className="service__header">{title}</h1>
            {    description &&
                <ServiceArticle 
                    title="About this Course"
                    description={ description }
                />
            }
            {    whatWillILearn &&
                <ServiceArticle 
                    title="What will I learn"
                    description={ whatWillILearn }
                />
            }
            {    whoShouldAttend &&
                <ServiceArticle 
                    title="Who should attend?"
                    description={ whoShouldAttend }
                />
            }
        </div>
    )
}

export default Service;