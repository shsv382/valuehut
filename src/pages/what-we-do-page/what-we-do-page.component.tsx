import React from 'react';
import './what-we-do-page.styles.scss';

import { useAppSelector } from '../../redux/hooks';

import MainArticle from '../../components/main-article/main-article.component';

const WhatWeDoPage: React.FC = () => {
    const introdutionArticle = useAppSelector((state) => (state.pages.whatWeDo.introdutionArticle));
    const coachings = useAppSelector((state) => (state.pages.whatWeDo.coaching));
    const trainings = useAppSelector((state) => (state.pages.whatWeDo.training))
    return (
        <div className='page what-we-do-page'>
            <MainArticle 
                { ...introdutionArticle }
            />
            {
                Object.values(coachings).map((coaching:any, i:number) => {
                    return i < 3 && (
                        <MainArticle 
                            imageURL={coaching.imageURL}
                            header={coaching.title}
                            description={coaching.description}
                            price={coaching.price}
                            key={`coaching-${i}`}
                        />
                    )
                })
            }
            {
                Object.values(trainings).map((training:any, i:number) => {
                    return i < 3 && (
                        <MainArticle 
                            imageURL={training.imageURL}
                            header={training.title}
                            description={training.description}
                            price={training.price}
                            key={`training-${i}`}
                        />
                    )
                })
            }
        </div>
    );
}

export default WhatWeDoPage;