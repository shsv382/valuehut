import React from 'react';
import './about-page.styles.scss';
import { useAppSelector } from '../../redux/hooks';

import MainArticle from '../../components/main-article/main-article.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

const AboutPage:React.FC = () => {
    const { aboutCoachArticle } = useAppSelector((state) => (state.content.pages.about));
    const { headerArticle } = useAppSelector((state) => (state.content.pages.home));
    return (
        <div className="page about-page">
            <MainArticle 
                { ...headerArticle }
            />
            <div  className="about-page__avatar">
                <img src="images/avatar.jpeg" className="about-page__avatar-image" />
            </div>
            <div></div>
            <MainArticle 
                { ...aboutCoachArticle }
            />
            <PreviousClients />
        </div>
    )
}

export default AboutPage;