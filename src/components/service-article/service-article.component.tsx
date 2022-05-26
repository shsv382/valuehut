import React from "react";
import './service-article.styles.scss';

interface ServiceArticleProps {
    title?: string,
    content: string,
    children?: any
}

const ServiceArticle: React.FC<ServiceArticleProps> = ({ title, content, children }) => {
    return (
        <section className="service__article">
            <article>
                {title && <h2 className="service__article__section__header">{ title }</h2>}
                <p>
                    { content}
                </p>
                { children }
            </article>
        </section>
    )
}

export default ServiceArticle;