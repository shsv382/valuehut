interface ArticleTypes {
    imageURL: string,
    header: string,
    description: string
}

export interface ContactDataTypes {
    region: string,
    address: string,
    email: string,
    phone: string | number
}

export interface IntrodutionTypes {
    [key: string]: ArticleTypes
}

export interface WhatWeDoTypes {
    introdution: IntrodutionTypes
}

export interface PreviousClientsTypes {
    name: string,
    imageURL: string
}

interface HomepageTypes {
    headerArticle: any,
    servicesArticle: any,
    whatCustomersWant: any,
    whatWeDo: any,
    previousClients: PreviousClientsTypes[]
}

export interface PagesTnterface {
    home: any,
    whatWeDo: WhatWeDoTypes,
    about: any,
    contact: [howto: string, offices: ContactDataTypes[]]
}

export const content = {
    pages: {
        home: {
            headerArticle: {
                imageURL: "./business.jpg",
                header: "ValueHut Limited",
                description: "ValueHut is an agile coaching and training consultancy that is helping Organisations focus on most valuable work by aligning strategy to execution across all units of the business; engaging with us leads to outcomes that ensure that our client can continue to delight their customer and employees are increasing happy working in these organisations."
            },
            servicesArticle: {
                header: "Services"
            },
            whatCustomersWant: {
                imageURL: "./rodolfo.jpg",
                header: "What does our customer want?",
                descriptionList: [
                    `Helping entire organizations to focus on most valuable work. (Reduce waste, supporting to link team goal to organisational objectives, Focus on outcomes.)`,
                    `Supporting organizations to make the workplace fun; people are happy at work doing the best work. (Working at a sustainable pace, Building self-managing & cross functional teams, Support people & teams to be accountable for their outcomes, Support people to build mastery by using OKR to set stretch goals)`,
                    `Continuously delighting customers. (How do Teams measure & capture measures of Value Delivered, Continuously improve the Product/Service using Feedback received.)`
                ]
            },
            whatWeDo: {
                imageURL: "./mentatdgt.jpg",
                header: "What we do",
                description: `Recent Research indicates that a lot of companies have 
                            embarked on some form of Agile Transformation in the 
                            last 10 years, however only a small proportion of these 
                            companies have realised the value promises by Agile 
                            Transformation. This realisation is not an issue with Agile 
                            but to a large extent a lack of understanding of the Agile 
                            Frameworks being adopted and the underlying Agile 
                            Principles.`
            },
            previousClients: [
                {
                    name: "Barclays",
                    imageURL: "barclays.jpg"
                }, {
                    name: "HSBC",
                    imageURL: "hsbc.jpg"
                }, {
                    name: "BP",
                    imageURL: "bp.jpg"
                }, {
                    name: "Ministry of Justice",
                    imageURL: "ministry-of-justice.jpg"
                }, {
                    name: "UBS",
                    imageURL: "ubs.jpg"
                }, {
                    name: "Channel4",
                    imageURL: "channel4.jpg"
                }, {
                    name: "BBC Worldwide",
                    imageURL: "bbc-worldwide.jpg"
                }
            ]
        },
        whatWeDo: {
            introdution: {
                "coaching": {
                    imageURL: "./mentatdgt.jpg",
                    header: "Coaching",
                    description: `Recent Research indicates that a lot of companies have 
                                embarked on some form of Agile Transformation in the 
                                last 10 years, however only a small proportion of these 
                                companies have realised the value promises by Agile 
                                Transformation. This realisation is not an issue with Agile 
                                but to a large extent a lack of understanding of the Agile 
                                Frameworks being adopted and the underlying Agile 
                                Principles.`
                }, 
                "training": {
                    imageURL: "./mikael.jpg",
                    header: "Training",
                    description: `Training provides information to everyone within a team or organisation 
                    at the same time and the understanding is shared between everyone. Shared meaning in 
                    an organisation helps adoption of agile somewhat easier. 
                    We offer a number of Scrum.org Trainings and are able to create 
                    bespoke training packages on Agile Practices.`
                },
                "consultancy": {
                    imageURL: "./cameron.jpg",
                    header: "Consultancy",
                    description: `In situations where the Organisation has made a decision 
                    on the Agile Framework that should be adopted by the Product Teams, a 
                    Scrum Master from ValueHut would help improve the understandinging of 
                    Scrum or Kanban. In addtion, the Scrum Master would help improve the use 
                    of the Agile Framework by teaching Supplimentary practices that extend the 
                    benefit of using such Frameworks.`
                }
            }
        },
        about: {
            aboutCoachArticle: {
                header: "About our Coach",
                description: `
                    Sam is a dynamic Agile practitioner, Coach and Professional Scrum Trainer with Scrum.org
                    Sam's first encounter with Scrum and Agile was in 2007; He has accumulated a lot of experience supporting organisations in delivering value to their Customers and Stakeholders. 
                    Previous clients include Barclays, HSBC, BP, Ministry of Justice, UBS, Channel4, BBC Worldwide and a number of startups from around the world.
                     
                    `
            }, 
            moreAboutCoachArticle: {
                imageURL: "./photo.jpg",
                header: "When not training,",
                description: `               
                    Sam works as an Enterprise Agile Coach where he supports organizations in scaling their implementation of Agile Frameworks (e.g Scrum, Kanban) up to the Executive level of the organization.
                    Agile Frameworks including the practices and tools are great but Sam's ultimate goal is to support the organizations on building the mindset that is required for Agility to thrive.
                    
                    `
            }
        },
        contact: {
            howto: 'If you’re considering using the services provided by ValueHut, please phone or email us your query with as much detail as possible. Upon receiving your email, we will either call or email you – within 24 hours of your email being sent – to discuss the services further and initiate the next step.',
            offices: [
                {
                    region: "UK",
                    email: "info@valuehut.co",
                    phone: '+44(0)7946713054',
                    address: 'North Westgate House,Harlow CM20 1YS'
                },
                {
                    region: "Nigeria",
                    email: 'info@valuehut.co',
                    phone: '+234(0)818193501',
                    address: 'Amelia House, Crescent Rd, Worthing, BN11 1QR'
                }
            ]
        }
    }
}