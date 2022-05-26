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
    const { title, description, articles, streams, imageURL } = { ...training };
    return (
        <div className='page training-page'>
            <div className="training__header" style={{backgroundImage: `url('images/${imageURL}')`}}>
                <h1><span>{title}</span></h1>
            </div>
            <div className="training-page__placeholder"></div>
            {    description &&
                <TrainingArticle 
                    title="About this Course"
                    content={ description }
                />
            }
            {   articles && articles.map((article, i) => (
                    <TrainingArticle key={article.content[0] + i + article.content[0]}
                        title={ article.title }
                        content={ article.content }
                    />
                ))
            }
            <div id="book-now">
                {
                    streams &&
                    <DatesTable
                    streams={ streams }
                    training={ training }
                    />
                }
            </div>
        </div>
    )
}

export default Training;