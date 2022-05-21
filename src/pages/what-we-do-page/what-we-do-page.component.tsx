import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './what-we-do-page.styles.scss';

import MainArticle from '../../components/main-article/main-article.component';

import { TrainingTypes } from '../../training';
import { IntrodutionTypes } from '../../content';

interface WhatWeDoTypes {
    url: string,
    trainings: TrainingTypes[],
    children?: any
}

const WhatWeDoPage: React.FC<WhatWeDoTypes> = ({ url, trainings }) => {
    const introdution: IntrodutionTypes = { ...useAppSelector(state => state.content.pages.whatWeDo.introdution) };
    const introdutionArticle = introdution[url];
    return (
        <div className='page what-we-do-page'>
            <MainArticle 
                { ...introdutionArticle }
            />
            {
                trainings.map((training:TrainingTypes, i:number) => {
                    return (
                        <MainArticle 
                            imageURL={training.imageURL}
                            header={training.title}
                            description={training.description}
                            streams={training.streams}
                            isTraining={training.isTraining}
                            key={`training-${training.id}`}
                        />
                    )
                }
            )}
            {
                (url === "training") &&
                <div className="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="5c12d8d7393a0100015d1c3e" data-style-height="240px" data-style-width="100%" data-theme="light" data-tags="trainer:Nml4dDMzbkNoYXJhY3Ryekj+B9CXUA==" data-stars="1,2,3,4,5" data-review-languages="en"><a href="https://www.trustpilot.com/review/scrum.org" target="_blank" rel="noopener">Trustpilot</a></div>
            }
        </div>
    );
}

export default WhatWeDoPage;