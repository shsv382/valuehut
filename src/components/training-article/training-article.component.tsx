import React from "react";
import './training-article.styles.scss';

interface TrainingArticleProps {
    title: string,
    description?: string,
    children?: any
}

const TrainingArticle: React.FC<TrainingArticleProps> = ({ title, description, children }) => {
    return (
        <section className="training__article">
            <article>
                <h2 className="training__article__section__header">{ title }</h2>
                <p>
                    { description }
                </p>
                { children }
            </article>
        </section>
    )
}

export default TrainingArticle;