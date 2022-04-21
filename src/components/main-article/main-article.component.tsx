import { url } from 'inspector';
import React from 'react';
import { Link } from 'react-router-dom';

import './main-article.styles.scss';

interface MainArticleProps {
    imageURL: string;
    header: string;
    description: string;
    price?: number;
    otherProps?: any[]
}

const MainArticle:React.FC<MainArticleProps> = ({imageURL, header, description, price, ...otherProps}: MainArticleProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <section className="main__article">
            <article className="main__article__section">
                <h1 className="main__article__header">{header}</h1>
                <p className="main__article__description">
                    {description}
                </p>
                <div className='main__article__buttons__block'>
                {
                    price &&
                    <button onClick={handleClick} className="button button-primary button-primary-default">
                        Buy Now
                    </button>
                }
                {
                    price &&
                    <Link to={"/" + header.toLowerCase().split(" ").join("-")} className="button button-secondary button-secondary-default">
                        Check Out
                    </Link>
                }
                </div>
            </article>
            <aside className="main__article__aside main__article__aside__image"
                    style={{backgroundImage: `url("/images/${imageURL}")`}} >
            </aside>
        </section>
    )
}

export default MainArticle;