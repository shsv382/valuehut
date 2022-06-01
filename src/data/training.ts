// Here you can add the new training. 
// Use Interface below as a template to add right fields 
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case
import { primaryMarket, tertiaryMarket } from "./countries"

export interface PriceTypes {
    region: string,
    regionDescription: string | string[],
    amount: number,
    currency?: CurrencyTypes
}

export interface CurrencyTypes {
    name: string,
    symbol?: string
}

export interface StreamTypes {
    startDate: any,
    endDate: any,
    time: string,
    price: PriceTypes[],
    filled: boolean
}

export interface TrainingArticleTypes {
    title?: string,
    content: string,
    contentList?: string[],
    imageURL?: string,
    textAlign?: string,
    imagePosition?: string
}

export interface TrainingTypes {
    id: number,
    title: string,
    acronym?: string,
    description?: string,
    logo?: any,
    iconBorder?: string,
    imageURL: string,
    articles?: TrainingArticleTypes[],
    streams?: StreamTypes[], 
    isTraining?: boolean
    
    // Please Note!
    /*
        Dates should be created by JavaScript method in UTC format
        new Date("2023-03-11T11:30:00+09:00")

        Duration in hours
    */
}

interface TrainingObject {
    training: TrainingTypes[]
}

export const training:TrainingObject = {
    training: [
        {
            id: 2,
            title: "Professional Scrum Master",
            acronym: "PSM",
            description: `The PSM is an interactive, activity-based course where 
                        students gain insight into Professional Scrum and the 
                        role of the Scrum Master. The class is structured through 
                        a combination of discussion and exercises. This enables 
                        students to develop a deep understanding of the 
                        underlying principles of Scrum and the Agile mindset 
                        while learning the practices applied by successful Scrum 
                        Teams. PSM is recommended for organisation leaders 
                        including Mid-Level Managers, Project Managers, Project 
                        Management Office Managers, Senior Practitioners, 
                        anyone working within a Product Team or anyone who 
                        intends to become a Scrum Master. The class is delivered 
                        over a two days (8hrs per day).`,
            imageURL: "./energy.jpg",
            logo: "psm.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "What Will I Learn?",
                    content: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`
                },
                {
                    title: "Course Learning Objectives",
                    content: `The course objectives include:`,
                    contentList: [
                        `Help Scrum Teams deliver value to their organization`,
                        `Understand the theory and principles behind Scrum such as Empiricism`,
                        `Understand how each part of the Scrum framework ties back to the principles and theory`,
                        `Understand uncertainty and complexity in product delivery`,
                        `Understand the meaning and importance of the Scrum values`,
                        `Learn what Done means and why it is crucial to transparency`,
                        `Know how to use the Product Backlog to plan with agility`,
                        `Understand the importance of self-managing teams and the role of Scrum Master in developing the self-managing abilities of the Scrum Team`,
                        `Clarify the leadership role a Scrum Master play on the team`,
                        `Learn the skills, traits and behaviour shifts required to be a Scrum Master`
                    ]
                },
                {
                    title: "Assessment Certification",
                    content: `All participants completing the Professional Scrum Master course will receive 
                    a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    The industry-recognized PSM I certification requires a minimum passing score of 85%. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their 
                    free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.`
                }
            ],
            streams: [
                {
                    startDate: new Date("2023-06-24"),
                    endDate: new Date("2023-06-25"),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1000,
                        // currency: {
                        //     name: "gbp",
                        //     symbol: "£"
                        // }    
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1000
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 800
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 900    
                        }
                    ], 
                    filled: false
                }
            ],
            isTraining: true
        },
        {
            id: 3,
            title: "Professional Agile Leadership",
            acronym: "PAL-E",
            description: `Leaders at all levels play a vital role in the Agile 
                        Transformational Journey of their organisation. PAL 
                        is structured to help managers at all levels who 
                        work with agile teams on developing the required 
                        mindset for Agility to thrive and teach techniques for 
                        building effective organisations. The PAL class is highly 
                        recommended for C- Suite Executives, Middle-Level 
                        Management, Agile Team Leaders, and Human Resource 
                        Leaders. The class can be delivered over a two days (8hrs 
                        per day) class or a four days (4hrs per day) class.`,
            imageURL: "./fauxels.jpg",
            logo: "pal-e.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "What will I learn?",
                    content: `In this class, Leaders understand how agility adds value to their 
                    organization and why their support in creating an agile culture is essential to success. 
                    The class provides Leaders information that is required to support and enable teams by 
                    providing guidance and removing impediments that are beyond the team’s ability to address.`
                },
                {
                    title: "Assessment Certification",
                    content: `All participants will receive a password to attempt the will receive a password to attempt the PAL I assessment.
                    PAL participants who attempt the PAL I assessment within 14 days of receiving their free password and do not score at 
                    least 85% will be granted a 2nd attempt at no additional cost.`
                }
            ],
            streams: [
                {
                    startDate: new Date("2022-07-15"),
                    endDate: new Date("2022-07-16"),
                    time: "9:00 - 17:00 London BST Timezone",
                    price: [
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1000
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 800
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 900    
                        }
                    ], 
                    filled: false
                }
            ],
            isTraining: true
        },
        {
            id: 4,
            title: "Applying Professional Scrum",
            acronym: "APS",
            description: `The APS is a hands-on, activity-based course in which 
                        students experience how Professional Scrum and the Scrum framework 
                        improves their capacity to deliver 
                        value compared to traditional methods. Scrum enables 
                        a better way of working that highlights the use of 
                        experimentation, incremental delivery of customer value, 
                        frequent feedback loops and the fostering of strong team 
                        dynamics. The course is high recommended for teams 
                        that already work together in an organisation to improve 
                        their ways of working using Scrum. The class is delivered 
                        over a two days (8hrs per day).`,
            imageURL: "./morillo.jpg",
            logo: "aps.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "What will I learn?",
                    content: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`
                },
                {
                    title: "Assessment Certification",
                    content: `All participants will receive a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their free password and 
                    do not score at least 85% will be granted a 2nd attempt at no additional cost.`
                }
            ],
            streams: [],
            isTraining: true
        }
    ]
}