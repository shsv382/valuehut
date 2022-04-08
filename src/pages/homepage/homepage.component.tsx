import React from 'react';
import './homepage.styles.scss';

import { data } from '../../data';

import MainArticle from '../../components/main-article/main-article.component';
import HeaderWithButton from '../../components/header-with-button/header-with-button.component';

const Homepage: React.FC = () => {
    const headerArticle = {...data.pages.home.headerArticle};
    return (
        <div className='page homepage'>
            <MainArticle 
                imageURL={headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
            />
            <HeaderWithButton
                header="Services"
                link="View all"
                href="training"    
            />
            <div className="triple-box">
                <div className="triple-box__boxes">
                    <div className="triple-box__box1"></div>
                    <div className="triple-box__box1"></div>
                    <div className="triple-box__box1"></div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;