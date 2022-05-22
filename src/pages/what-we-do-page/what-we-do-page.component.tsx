import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './what-we-do-page.styles.scss';

import MainArticle from '../../components/main-article/main-article.component';

import { TrainingTypes } from '../../training';
import { IntrodutionTypes } from '../../content';
import TrustBox from '../../components/trustbox/trustbox.component';

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
            <TrustBox />
        </div>
    );
}

export default WhatWeDoPage;