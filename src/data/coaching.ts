// Here you can add the new training. 
// Use Interface below as a template to add right fields 
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case

export interface CoachingArticleTypes {
    title?: string,
    content: string,
    imageURL?: string,
    textAlign?: string,
    imagePosition?: string
}

export interface CoachingTypes {
    id: number,
    title: string,
    acronym?: string,
    description?: string,
    iconURL?: string,
    iconBorder?: string,
    imageURL: string,
    articles: CoachingArticleTypes[],
    isTraining?: boolean
    
    // Please Note!
    /*
        Dates should be created by JavaScript method in UTC format
        new Date("2023-03-11T11:30:00+09:00")

        Duration in hours
    */
}

interface CoachingObject {
    coaching: CoachingTypes[],
}

export const coaching: CoachingObject = {
    coaching: [
        {
            id: 1,
            title: "Enterprise and Organizational Coaching",
            acronym: "",
            description: `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole organisation could be an uphill battle; we advise our clients that in other to deliver sustainable and long-lasting change, agility should be introduced using a “whole organisation” approach to agility. This approach however comes with it own sets of challenges which might be familiar to you.`,
            imageURL: "./cameron.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
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
                    title: "Who Should Attend?",
                    content: `We have helped a lot of organisation to navigate these kinds of challenges to deliver true agility across the enterprise by leverage their experience and skills in Large scale facilitation, co-creation of outcomes and the use of experimentation across the enterprise.`
                }
            ],
            isTraining: true
        }, {
            id: 5,
            title: "Team Coaching",
            acronym: "",
            description: `Far too many teams are “Doing Agile” rather than “Being Agile”. Often times, the this could mean that the “Agile Rituals” are being done but Agile doesn’t seem to be delivering on it’s promise. The Principles of Agile are very simple but take a long time to be consistent in its application to every aspect of Delivery.`,
            imageURL: "./mikael.jpg",
            iconURL: "",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    content: `Our Agile coaches apply their extensive knowledge of Agile principles and framework to guide struggling individual and teams. Our mission is to unlock the potentials in every individual and team so that they can continue to deliver better products faster. Our Agile coaches engage with your team in a number of roles as Agile Coaches, Scrum Master and sometime as Delivery Managers; the mission remains the same regardless of the role that is being filled with one of our coaches.
                    `,
                    
                },
                {
                    content: `We have helped a lot of organisation to navigate these kinds of challenges to deliver true agility across the enterprise by leverage their experience and skills in Large scale facilitation, co-creation of outcomes and the use of experimentation across the enterprise.`
                }
            ],
            isTraining: true
        }
    ]
}