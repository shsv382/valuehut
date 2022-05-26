import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../data/training';
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
    const { title, description, articles, streams, imageURL } = { ...training };
    return (
        <div className='page service-page'>
            <div className="service__header" style={{backgroundImage: `url('images/${imageURL}')`}}>
                <h1><span>{title}</span></h1>
            </div>
            <div className="service-page__placeholder"></div>
            {    description &&
                <ServiceArticle 
                    title="About this Course"
                    content={ description }
                />
            }
            {   articles && articles.map((article, i) => (
                    <ServiceArticle key={article.content[0] + i + article.content[0]}
                        title={ article.title }
                        content={ article.content }
                    />
                ))
            }
            <ServiceArticle 
                title="For more details"
                content=""
            >
                <Link 
                    className="button button-primary button-primary-large"
                    to="/contact">
                        Contact us
                </Link>
            </ServiceArticle>
        </div>
    )
}

export default Service;