import React from 'react';
import './about-page.styles.scss';
import { useAppSelector } from '../../redux/hooks';

import MainArticle from '../../components/main-article/main-article.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

const AboutPage:React.FC = () => {
    const { aboutCoachArticle, moreAboutCoachArticle } = useAppSelector((state) => (state.content.pages.about));
    return (
        <div className="page about-page">
            <MainArticle 
                { ...aboutCoachArticle }
            />
            <PreviousClients />
            <MainArticle 
                { ...moreAboutCoachArticle }
            />
        </div>
    )
}

export default AboutPage;