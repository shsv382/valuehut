import React from 'react';
import './about-page.styles.scss';
import { useAppSelector } from '../../redux/hooks';

import MainArticle from '../../components/main-article/main-article.component';

const AboutPage:React.FC = () => {
    const aboutCoachArticle = useAppSelector((state) => (state.content.pages.about.aboutCoachArticle));
    return (
        <div className="page about-page">
            <MainArticle 
                { ...aboutCoachArticle }
            />
            {/* { This is technical component, to be removed } */}
            <MainArticle 
                { ...aboutCoachArticle }
            />
        </div>
    )
}

export default AboutPage;