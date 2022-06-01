import { url } from 'inspector';
import React from 'react';
import { Link } from 'react-router-dom';

import './main-article.styles.scss';

interface MainArticleProps {
    imageURL?: string,
    header: string,
    description?: string,
    descriptionList?: string[],
    streams?: any[],
    isTraining?: boolean,
    otherProps?: any[],
    style?: any,
    logo?: any,
    children?: any
}

const MainArticle:React.FC<MainArticleProps> = ({imageURL, header, description, descriptionList, streams, isTraining, style, logo, children, ...otherProps}: MainArticleProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    const articleWidth: object = imageURL ? {} : {width: "100%"}
    return (
        <section className={`main__article`} style={style}>
            <article className="main__article__section" style={articleWidth}>
                { isTraining ? 
                <h2 className={`main__article__header`}>
                    { logo ? <img src={`/training/${logo}`} /> : "" }
                    <span>{ header }</span>
                </h2> : 
                <h1 className={`main__article__header`}>
                    { header }
                </h1>
                }
                    { description &&
                        <p className="main__article__description">
                            { description }
                        </p> 
                    }{ descriptionList &&
                        <ul className="main__article__description main__article__description-list">
                            { descriptionList.map((d: string, i: number) => (<li key={`${header}-ma-li-${i}`}>{ d }</li>)) }
                        </ul>
                    }
                <div className='main__article__buttons__block'>
                {
                    streams &&
                    <Link to={`${header.toLowerCase().split(" ").join("-")}#book-now`} className="button button-primary button-primary-default">
                        Book Now
                    </Link>
                }
                {
                    isTraining &&
                    <Link to={header.toLowerCase().split(" ").join("-")} className="button button-secondary button-secondary-default">
                        Read More
                    </Link>
                }
                {
                    children
                }
                </div>
            </article>
            { imageURL && ( <aside className="main__article__aside main__article__aside__image"
                            style={{backgroundImage: `url("/images/${imageURL}")`}} >
                            </aside>)
            }
        </section>
    )
}

export default MainArticle;