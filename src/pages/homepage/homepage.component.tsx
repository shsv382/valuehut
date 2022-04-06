import React from 'react';
import './homepage.styles.scss';

import { data } from '../../data';

import MainArticle from '../../components/main-article/main-article.component';

const Homepage: React.FC = () => {
    const headerArticle = {...data.pages.home.headerArticle};
    return (
        <div className='page homepage'>
            <MainArticle 
                imageURL={headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
            />
        </div>
    )
};

export default Homepage;