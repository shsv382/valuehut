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
            <section>
                <h2 className="main__article__header">{header}</h2>
                <p className="main__article__description">
                    {description}
                </p>
            </section>
            <aside>
                <img className="main__article__aside__image" src={imageURL} />
            </aside>
        </article>
)

export default MainArticle;