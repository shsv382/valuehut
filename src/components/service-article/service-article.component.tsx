import React from "react";
import './service-article.styles.scss';

interface ServiceArticleProps {
    title: string,
    description: string,
    children?: any
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({ title, description }) => {
    return (
        <article className="service__article">
            <section>
                <h2 className="service__article__section__header">{ title }</h2>
                <p>
                    { description }
                </p>
            </section>
        </article>
    )
}

export default ServiceArticle;