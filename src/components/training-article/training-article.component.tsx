import React from "react";
import './training-article.styles.scss';

interface TrainingArticleProps {
    title?: string,
    content?: string,
    children?: any
}

const TrainingArticle: React.FC<TrainingArticleProps> = ({ title, content, children }) => {
    return (
        <section className="training__article">
            <article>
                {title && <h2 className="training__article__section__header">{ title }</h2>}
                <p>
                    { content }
                </p>
                { children }
            </article>
        </section>
    )
}

export default TrainingArticle;