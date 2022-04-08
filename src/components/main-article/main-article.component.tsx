import React from 'react';

import './main-article.styles.scss';

interface MainArticleProps {
    imageURL: string;
    header: string;
    description: string;
    otherProps?: any[]
}

const MainArticle = ({imageURL, header, description, otherProps}: MainArticleProps) => (
    <article className="main__article">
            <section className="main__article__section">
                <h1 className="main__article__header">{header}</h1>
                <p className="main__article__description">
                    {description}
                </p>
            </section>
            <aside className="main__article__aside">
                <img className="main__article__aside__image" src={imageURL} />
            </aside>
        </article>
)

export default MainArticle;