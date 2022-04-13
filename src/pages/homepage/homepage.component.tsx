import React from 'react';
import './homepage.styles.scss';

import { useAppSelector } from '../../redux/hooks';

import MainArticle from '../../components/main-article/main-article.component';
import HeaderWithButton from '../../components/header-with-button/header-with-button.component';
import TripleBox from '../../components/triple-box/triple-box.component';
import ServiceBox from '../../components/service-box/service-box.component';

const Homepage: React.FC = () => {
    const { headerArticle, servicesArticle, aboutCoachArticle } = { ...useAppSelector((state) => (state.pages.home)) };
    const trainings = useAppSelector((state) => (state.pages.whatWeDo.training))
    return (
        <div className='page homepage appearancable'>
            <MainArticle 
                imageURL={headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
            />
            <HeaderWithButton
                header={servicesArticle.header}
                link="View all"
                href="training"    
            />
            <TripleBox>
                {
                    Object.values(trainings).map((training:any, i:number) => {
                        return i < 3 && (
                            <ServiceBox {...training} key={`service-${i}`} />
                        )
                    })
                }
            </TripleBox>
            <MainArticle 
                imageURL={aboutCoachArticle.imageURL}
                header={aboutCoachArticle.header}
                description={aboutCoachArticle.description}
            />
        </div>
    )
};

export default Homepage;