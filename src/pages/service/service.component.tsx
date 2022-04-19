import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../training';
import ServiceArticle from '../../components/service-article/service-article.component';

import DatesTable from '../../components/dates-table/dates-table.component';

interface ServiceTypes extends TrainingTypes {
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ title, description, whatWillILearn, whoShouldAttend, dates, price }) => {
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
            {
                (dates && price) &&
                <DatesTable
                    dates={ dates }
                    price={ price }
                />
            }
        </div>
    )
}

export default Service;