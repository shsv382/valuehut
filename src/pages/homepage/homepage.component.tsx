import React from 'react';
import './homepage.styles.scss';

import { useAppSelector } from '../../redux/hooks';

import WidescreenBanner from '../../components/widescreen-banner/widescreen-banner.component';
import MainArticle from '../../components/main-article/main-article.component';
import HeaderWithButton from '../../components/header-with-button/header-with-button.component';
import TripleBox from '../../components/triple-box/triple-box.component';
import ServiceBox from '../../components/service-box/service-box.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

const Homepage: React.FC = () => {
    const { headerArticle, servicesArticle, whatCustomersWant, whatWeDo } = { ...useAppSelector((state) => (state.content.pages.home)) };
    const trainings = useAppSelector((state) => (state.training))
    const services = { ...useAppSelector((state) => (state.content.pages.whatWeDo.introdution)) };
    return (
        <>
        <WidescreenBanner />
        <div className='page homepage'>
            <MainArticle 
                imageURL={headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
                />
            <MainArticle 
                imageURL={whatCustomersWant.imageURL}
                header={whatCustomersWant.header}
                descriptionList={whatCustomersWant.descriptionList}
            />
            <HeaderWithButton
                header={servicesArticle.header}
                link="View all"
                href="training"    
            />
            <TripleBox>
                {
                    Object.values(services).map((training:any, i:number) => {
                        return i < 3 && (
                            <ServiceBox {...training} key={`service-${training.id}`} />
                        )
                    })
                }
            </TripleBox>
            <MainArticle 
                imageURL={whatWeDo.imageURL}
                header={whatWeDo.header}
                description={whatWeDo.description}
            />
            <PreviousClients />
        </div>
        </>
    )
};

export default Homepage;