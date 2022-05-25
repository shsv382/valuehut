import React from 'react';
import './training.styles.scss';
import { TrainingTypes } from '../../data/training';
import TrainingArticle from '../../components/training-article/training-article.component';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';

import DatesTable from '../../components/dates-table/dates-table.component';

interface TrainingComponentTypes {
    training: TrainingTypes,
    children?: any
}

const Training: React.FC<TrainingComponentTypes> = ({ training }) => {
    const { title, description, whatWillILearn, whoShouldAttend, streams, imageURL } = { ...training };
    return (
        <div className='page training-page'>
            <div className="training__header" style={{backgroundImage: `url('images/${imageURL}')`}}>
                <h1><span>{title}</span></h1>
            </div>
            <div className="training-page__placeholder"></div>
            {    description &&
                <TrainingArticle 
                    title="About this Course"
                    description={ description }
                />
            }
            {    whatWillILearn &&
                <TrainingArticle 
                    title="What will I learn"
                    description={ whatWillILearn }
                />
            }
            {    whoShouldAttend &&
                <TrainingArticle 
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
                <TrainingArticle 
                    title="For more details"
                >
                    <Link 
                        className="button button-primary button-primary-large"
                        to="/contact">
                            Contact us
                    </Link>
                </TrainingArticle>
            }
        </div>
    )
}

export default Training;