import React from 'react';
import './service.styles.scss';
import { TrainingTypes } from '../../training';

interface ServiceTypes extends TrainingTypes {
    children?: any
}

const Service: React.FC<ServiceTypes> = ({ title }) => {
    return (
        <div className='page service-page appearancable'>
            <h1 className="service__header">{title}</h1>
            <article className="service__article">
                <section>
                    <h2 className="service__article__section__header">What will I learn</h2>
                    <p>
                    Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).
                    </p>
                </section>
            </article>
        </div>
    )
}

export default Service;