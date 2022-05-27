// Here you can add the new consultancy. 
// Use Interface below as a template to add right fields 
// when you will create a new consultancy

export interface ConsultancyArticleTypes {
    title?: string,
    content: string,
    imageURL?: string,
    textAlign?: string,
    imagePosition?: string
}

export interface ConsultancyTypes {
    title: string,
    acronym?: string,
    description?: string,
    imageURL: string,
    articles: ConsultancyArticleTypes[],
}

interface ConsultancyObject {
    consultancy: ConsultancyTypes,
}

export const consultancy: ConsultancyObject = {
    consultancy: {
        title: "Enterprise and Organizational Consultancy",
        description: `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole organisation could be an uphill battle; we advise our clients that in other to deliver sustainable and long-lasting change, agility should be introduced using a “whole organisation” approach to agility. This approach however comes with it own sets of challenges which might be familiar to you.`,
        imageURL: "./mikael.jpg",
        articles: [
            {
                title: "Typical challenges ",
                content: `that are faced include:
                \n•	Resistance at different levels within the organisation.\n
                \n•	Organisational structure & culture that is not optimised for Agility.\n
                \n•	Disjointed perceptions of the current and the future state for the Organisation across the Organisation.\n
                `
            }, 
            {
                title: "Enterprise and Organizational Consultancy",
                content: `We have helped a lot of organisation to navigate these kinds of challenges to deliver true agility across the enterprise by leverage their experience and skills in Large scale facilitation, co-creation of outcomes and the use of experimentation across the enterprise.`
            },
            {
                title: "Team Consultancy",
                content: `Far too many teams are “Doing Agile” rather than “Being Agile”. Often times, the this could mean that the “Agile Rituals” are being done but Agile doesn’t seem to be delivering on it’s promise. The Principles of Agile are very simple but take a long time to be consistent in its application to every aspect of Delivery.`,
                imageURL: "./cameron.jpg"
            }
        ]
    }
}
