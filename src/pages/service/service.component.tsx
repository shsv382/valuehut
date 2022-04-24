import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../training';
import ServiceArticle from '../../components/service-article/service-article.component';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';

import DatesTable from '../../components/dates-table/dates-table.component';

interface ServiceTypes {
    training: TrainingTypes,
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ training }) => {
    const { title, description, whatWillILearn, whoShouldAttend, streams } = { ...training };
    return (
        <div className='page service-page'>
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
                streams ?
                <div id="book-now">
                    <DatesTable
                        streams={ streams }
                        training={ training }
                    />
                </div> :
                <ServiceArticle 
                    title="For more details"
                >
                    <Link 
                        className="button button-primary button-primary-large"
                        to="/contact">
                            Contact us
                    </Link>
                </ServiceArticle>
            }
        </div>
    )
}

export default Service;