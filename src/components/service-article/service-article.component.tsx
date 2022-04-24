import React from "react";
import './service-article.styles.scss';

interface ServiceArticleProps {
    title: string,
    description?: string,
    children?: any
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({ title, description, children }) => {
    return (
        <section className="service__article">
            <article>
                <h2 className="service__article__section__header">{ title }</h2>
                <p>
                    { description }
                </p>
                { children }
            </article>
        </section>
    )
}

export default ServiceArticle;